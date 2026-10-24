import { useEffect, useRef, useState } from "react";
import roverImage from "../assets/Travail_rovers.png";
import wheelImage from "../assets/roue.png";
import dustFrame01 from "../assets/animation/poussiere_01.png";
import dustFrame02 from "../assets/animation/poussiere_02.png";
import dustFrame03 from "../assets/animation/poussiere_03.png";
import dustFrame04 from "../assets/animation/poussiere_04.png";
import dustFrame05 from "../assets/animation/poussiere_05.png";
import dustFrame06 from "../assets/animation/poussiere_06.png";
import dustFrame07 from "../assets/animation/poussiere_07.png";
import dustFrame08 from "../assets/animation/poussiere_08.png";
import dustFrame09 from "../assets/animation/poussiere_09.png";
import dustFrame10 from "../assets/animation/poussiere_10.png";
import "./Rovers.css";

// Taille du conteneur fixe du rover. La hauteur conserve le ratio de l'image source.
const roverWidth = 100;
const roverHeight = roverWidth * (3508 / 4961);

// Les images de poussière sont jouées dans cet ordre quand le scroll descend.
const dustFramesForward = [
    dustFrame01,
    dustFrame02,
    dustFrame03,
    dustFrame04,
    dustFrame05,
    dustFrame06,
    dustFrame07,
    dustFrame08,
    dustFrame09,
    dustFrame10,
];

// En remontant le scroll, les mêmes images sont jouées dans l'ordre inverse.
const dustFramesBackward = [...dustFramesForward].reverse();

// Convertit la progression du scroll en position et orientation sur le cadre autour du panneau.
function getRoverPosition(scrollTop, maxScroll, shellRect) {
    // Écart minimal entre le bord du panneau et le trajet du rover.
    const gap = 6;

    // Le rover est dessiné à l'horizontale : lorsqu'il tourne à 90°, son encombrement
    // latéral correspond à la moitié de sa hauteur.
    const sideOffset = roverHeight / 2 + gap;

    // Même marge verticale pour que le rover reste à l'extérieur du panneau.
    const topOffset = roverHeight / 2 + gap;

    // Limites du trajet exprimées dans les coordonnées de la fenêtre.
    // Les ajustements -35 et +100 sont des réglages visuels de position.
    const left = shellRect.left - sideOffset;
    const right = shellRect.right + sideOffset -35;
    const top = shellRect.top - topOffset+100;
    const bottom = shellRect.bottom + topOffset;

    // Le trajet est composé de deux côtés verticaux, d'un segment inférieur
    // et de deux virages arrondis en bas.
    const verticalLength = bottom - top;
    const horizontalLength = right - left;

    // Limite le rayon à 64 px et évite des virages plus grands que l'espace disponible.
    const cornerRadius = Math.min(64, verticalLength / 2, horizontalLength / 2);

    // Longueur de chaque segment droit après réservation de la place des virages.
    const verticalStraight = verticalLength - cornerRadius;
    const bottomStraight = horizontalLength - cornerRadius * 2;
    const cornerLength = (Math.PI * cornerRadius) / 2;
    // La poussière est masquée sur cette distance avant et après chaque virage.
    const cornerDustMargin = 30;

    // Longueur totale du parcours : deux côtés, le bas et les deux arcs.
    const routeLength = verticalStraight * 2
        + bottomStraight
        + cornerLength * 2;

    // Normalise le scroll entre 0 et 1, puis le convertit en distance sur le trajet.
    // La limite à 1 empêche le rover de dépasser la fin du parcours.
    const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
    let distance = routeLength * progress;

    // 1. Descend le côté gauche. La zone près du virage est signalée
    // pour y masquer progressivement la poussière.
    if (distance <= verticalStraight) {
        return {
            x: left,
            y: top + distance,
            angle: 270,
            inCorner: distance >= verticalStraight - cornerDustMargin,
        };
    }
    distance -= verticalStraight;

    // 2. Suit un quart de cercle en bas à gauche et tourne le rover en même temps.
    if (distance <= cornerLength) {
        const arcAngle = Math.PI - distance / cornerRadius;
        return {
            x: left + cornerRadius + cornerRadius * Math.cos(arcAngle),
            y: bottom - cornerRadius + cornerRadius * Math.sin(arcAngle),
            angle: (arcAngle * 180) / Math.PI + 90,
            inCorner: true,
        };
    }
    distance -= cornerLength;

    // 3. Traverse le bas. La poussière est masquée près des deux extrémités du segment.
    if (distance <= bottomStraight) {
        return {
            x: left + cornerRadius + distance,
            y: bottom,
            angle: 180,
            inCorner: distance <= cornerDustMargin || distance >= bottomStraight - cornerDustMargin,
        };
    }
    distance -= bottomStraight;

    // 4. Suit le virage inférieur droit et oriente le rover vers le haut.
    if (distance <= cornerLength) {
        const arcAngle = Math.PI / 2 - distance / cornerRadius;
        return {
            x: right - cornerRadius + cornerRadius * Math.cos(arcAngle),
            y: bottom - cornerRadius + cornerRadius * Math.sin(arcAngle),
            angle: (arcAngle * 180) / Math.PI + 90,
            inCorner: true,
        };
    }
    distance -= cornerLength;

    // 5. Remonte le côté droit jusqu'à la fin du trajet.
    return {
        x: right,
        y: bottom - cornerRadius - distance,
        angle: 90,
        inCorner: distance <= cornerDustMargin,
    };
}

export default function Rovers() {
    // Position de défilement : pilote la progression du rover et la rotation des roues.
    const [scrollTop, setScrollTop] = useState(0);

    // Sens du dernier mouvement : 1 en descendant, -1 en remontant, 0 à l'arrêt.
    const [movementDirection, setMovementDirection] = useState(0);

    // Garde le dernier sens pour que la poussière ne change pas de place pendant son fondu.
    const [lastMovementDirection, setLastMovementDirection] = useState(1);

    // Index de l'image de poussière actuellement affichée.
    const [dustFrameIndex, setDustFrameIndex] = useState(0);

    // Force le recalcul du trajet lorsque la fenêtre change de taille.
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Valeur précédente du scroll, utilisée pour détecter son sens.
    const previousScrollTop = useRef(0);

    useEffect(() => {
        // Précharge les images : l'animation de poussière n'attend pas leur téléchargement.
        dustFramesForward.forEach((frame) => {
            const image = new Image();
            image.src = frame;
        });
    }, []);

    useEffect(() => {
        // C'est le panneau, et non la fenêtre, qui défile dans cette page.
        const scrollElement = document.querySelector(".page-shell");

        // Si le panneau n'existe pas, aucun écouteur ne peut être installé.
        if (!scrollElement) return undefined;

        // Le mouvement est considéré terminé 140 ms après le dernier événement de scroll.
        let movementTimer;

        // Met à jour la position et le sens du rover quand le panneau défile.
        const updateScroll = () => {
            const currentScrollTop = scrollElement.scrollTop;
            const scrollDifference = currentScrollTop - previousScrollTop.current;

            // Compare le scroll actuel au précédent pour savoir dans quel sens le rover roule.
            if (scrollDifference !== 0) {
                const nextDirection = scrollDifference > 0 ? 1 : -1;
                setMovementDirection(nextDirection);
                setLastMovementDirection(nextDirection);
                window.clearTimeout(movementTimer);
                movementTimer = window.setTimeout(() => setMovementDirection(0), 140);
            }

            // Enregistre la valeur pour calculer la direction au prochain événement.
            previousScrollTop.current = currentScrollTop;
            setScrollTop(currentScrollTop);
        };

        // Le nouveau rendu recalcule les limites du trajet avec les dimensions à jour.
        const updateViewport = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
        };

        // Écoute le scroll du panneau sans bloquer le défilement.
        scrollElement.addEventListener("scroll", updateScroll, { passive: true });

        // Écoute les changements de taille de la fenêtre.
        window.addEventListener("resize", updateViewport);

        // Place immédiatement le rover au bon endroit au chargement.
        previousScrollTop.current = scrollElement.scrollTop;
        updateScroll();

        // Retire les écouteurs si le composant est supprimé.
        return () => {
            scrollElement.removeEventListener("scroll", updateScroll);
            window.removeEventListener("resize", updateViewport);
            window.clearTimeout(movementTimer);
        };
    }, []);

    // Anime la poussière uniquement pendant le déplacement, à 10 images par seconde.
    useEffect(() => {
        // Arrête l'animation si le rover ne bouge plus.
        if (movementDirection === 0) return undefined;

        // Passe à l'image suivante dix fois par seconde.
        const frameTimer = window.setInterval(() => {
            setDustFrameIndex((currentIndex) => (
                currentIndex + 1
            ) % dustFramesForward.length);
        }, 100);

        // Nettoie le timer quand le rover s'arrête ou repart dans l'autre sens.
        return () => window.clearInterval(frameTimer);
    }, [movementDirection]);

    // Récupère le panneau pour mesurer le scroll disponible et son rectangle à l'écran.
    const scrollElement = document.querySelector(".page-shell");

    // scrollTop ira de 0 à maxScroll pendant le parcours.
    const maxScroll = scrollElement
        ? scrollElement.scrollHeight - scrollElement.clientHeight
        : 0;

    // Sans panneau, utilise la fenêtre comme repère de secours.
    const shellRect = scrollElement
        ? scrollElement.getBoundingClientRect()
        : { left: 0, right: viewport.width, top: 0, bottom: viewport.height };

    // Calcule la position et l'orientation actuelles du rover.
    const position = getRoverPosition(scrollTop, maxScroll, shellRect);

    // Choisit l'ordre des images de poussière selon le sens du déplacement.
    const activeDustFrames = lastMovementDirection < 0
        ? dustFramesBackward
        : dustFramesForward;

    return (
        // Élément décoratif fixe, ignoré par les lecteurs d'écran et les clics.
        <div
            className="atom-rovers"
            aria-hidden="true"
            style={{
                // Place le rover sur le trajet calculé autour du panneau.
                left: `${position.x}px`,
                top: `${position.y}px`,

                // Garde la taille du rover proportionnelle à son image.
                width: `${roverWidth}px`,
                height: `${roverHeight}px`,

                // La rotation est proportionnelle au scroll : son signe fixe le sens des roues.
                "--wheel-rotation": `${scrollTop * -1.5}deg`,

                // Transmet l'angle au véhicule qui pivote autour de sa roue arrière.
                "--rover-angle": `${position.angle}deg`,

                // Retourne horizontalement la fumée quand le rover recule.
                "--dust-direction": lastMovementDirection < 0 ? "-1" : "1",

                // Décale le panache uniquement quand le scroll remonte.
                "--dust-offset-x": lastMovementDirection === -1 ? "-140px" : "0px",

                // Transmet au CSS l'image de poussière courante.
                "--dust-frame": `url("${activeDustFrames[dustFrameIndex]}")`,

                // Cache la poussière à l'arrêt et dans les virages.
                "--dust-opacity": movementDirection !== 0 && !position.inCorner ? "1" : "0",
            }}
        >
            <div className="atom-rovers-rotor">
                {/* Image du rover ; les roues dessinées sur l'image sont masquées par les roues animées. */}
                <img className="atom-rovers-body" src={roverImage} alt="" draggable="false" />

                {/* La fumée apparaît uniquement derrière la roue arrière. */}
                <span className="atom-rovers-dust atom-rovers-dust-back" />

                {/* Première roue indépendante, superposée à la roue du rover. */}
                <span className="atom-rovers-wheel atom-rovers-wheel-front">
                    <img src={wheelImage} alt="" draggable="false" />
                </span>

                {/* Roue intermédiaire superposée à celle du dessin. */}
                <span className="atom-rovers-wheel atom-rovers-wheel-third">
                    <img src={wheelImage} alt="" draggable="false" />
                </span>

                {/* Deuxième roue indépendante, elle aussi animée avec le scroll. */}
                <span className="atom-rovers-wheel atom-rovers-wheel-back">
                    <img src={wheelImage} alt="" draggable="false" />
                </span>
            </div>
        </div>
    );
}
