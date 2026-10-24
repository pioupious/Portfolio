import "./Body.css"
import "../atoms/Logiciel.css"
import Logiciel from "../atoms/Logiciel"
import Title from "../atoms/Title"
import Point from "../atoms/Point"
import Skill from "../atoms/Skill"
import Slash from "../atoms/Slash"
import Text_standard from "../atoms/Text_standard"
import Enjoliement from "../molecules/Enjoliement"
import Module_parcours from "../molecules/Module_parcours"
import Contact from "../molecules/Contactez_moi"
import Contact_section from "../molecules/Contact_section"



export default function Body() {
    return (
        <>
            <div id="body-intro">
                <Point id="pointtopBody" />
                <Slash id="body-intro-label" color="brown" content="Dossier // accueil archives" />
            </div>
            <div id="body-Title">
                <Title id="titlemaster" size="1" color="white" content="ABOUT ME" />
                <Point id="pointtoTitle" />
                
            </div>
            <Title id="body-subtitle" size="2" color="pink" content="Pierre qui roule n'amasse pas mousse ! S'améliorer par la pratique." />
            <Text_standard id="body-description" color="gray" content="Mon parcours professionnel s’est construit à la croisée de la création numérique et de l’informatique. Après plusieurs expériences en 3D et en effets visuels, notamment chez Blue Spirit et Les Improductibles, j’ai choisi d’orienter mes compétences vers la cybersécurité à la suite d’une reconversion. Mes expériences en R&D m’ont permis de travailler sur des environnements Linux, Proxmox et la configuration réseau, tout en développant des outils de test en Bash. Aujourd’hui en formation en cybersécurité en alternance, je m’intéresse particulièrement à l’administration, à la sécurisation des systèmes et à la supervision. J’aborde ces défis avec rigueur, curiosité et esprit d’équipe, des qualités nourries par des expériences professionnelles variées et par mon goût pour l’apprentissage continu." />
            <Enjoliement id="enjoliement" />

            <Contact id="Pierre-infos"/> 

            <Title id="skills-title" className="body-section-title" size="2" color="maganta" content="[ 00 // SKILLS ]" />
            <Slash className="body-index" content="INDEX: Talents // Compétences" color="brown" />
            <section id="body-section-skill">
                <Skill titre="Sécurité Réseau et Pare-feu" content="Maîtrise de la configuration des pare-feux et des réseaux (TCP/IP, NAT, VLAN) ainsi que des protocoles associés." />
                <Skill titre="Analyse de Journaux et Supervision (SIEM)" content="Compétence dans le déploiement de puits de logs et d'outils de surveillance comme le SIEM, IDS/IPS, Elasticsearch, Zabbix et Graylog." />
                <Skill titre="Déploiement et Administration de SI" content="Capacité à déployer et administrer des systèmes d'information sécurisés, incluant la gestion d'Active Directory (AD DS)" />
                <Skill titre="Langages et développement logiciel" content="Maîtrise de Python, Java et JavaScript, ainsi que du développement back-end et de la gestion de bases de données." />
                <Skill titre="Systèmes Linux et Virtualisation" content="Expérience pratique sur les environnements Linux (Debian, Ubuntu) et les solutions de virtualisation et serveurs (Proxmox, VMware)." />
                <Skill titre="R&D et Prototypage Technique" content="Aptitude à mener des recherches et développements ciblés, notamment sur les Namespaces et les solutions techniques innovantes." />
                <Skill titre="Réalisation en milieu créatif" content="Solide bagage artistique (artiste 3D / FX), ayant développé la rigueur, la gestion du stress et le respect de délais courts en production." />
                <Skill titre="Esprit d'Analyse et Veille Technologique" content="Curiosité naturelle et formation active en veille cybersécurité (TryHackMe) pour s'adapter continuellement aux nouveaux enjeux de sécurité." />
            </section>
            <section id="body-section-logiciel">
                <Logiciel content="Stormshield (CSNA)" />
                <Logiciel content="Elasticsearch" />
                <Logiciel content="Opnsense" />
                <Logiciel content="Zabbix" />
                <Logiciel content="Proxmox" />
                <Logiciel content="Debian" />
                <Logiciel content="VMware" />
                <Logiciel content="Windows Server" />
            </section>


            <Title id="experience-title" className="body-section-title" size="2" color="maganta" content="[ 01 // EXPÉRIENCES ]" />
            <Slash className="body-index" content="INDEX: Missions // Expériences" color="brown" />

            <Module_parcours
                number="1"
                titre="CYBERZEN"
                date="2026 – aujourd'hui"
                content="Travail dans une entreprise de développement et de conception d'une solution de pare-feu et de gestion de SI pour les petites et moyennes entreprises."
                secteur="CYBERSÉCURITÉ / STAGE / ALTERNANCE"
                missions={[
                    "Réaliser des travaux de recherche et développement sur les Namespaces.",
                    "Configurer VLAN, DHCP, NTP et DNS dans des Namespaces.",
                    "Créer des outils de test en Bash pour tester les configurations clientes.",
                    "Installer et utiliser Proxmox et Debian."
                ]}
            />

            <Module_parcours
                number="2"
                titre="LES IMPRODUCTIBLES"
                date="2024 – 2025"
                content="Travail dans une structure dédiée à la création de contenus publicitaires et de films pour le grand écran."
                secteur="3D ARTIST"
                missions={[
                    "Utilisation de nouvelles technologies de simulation en temps réel.",
                    "Création d'environnements 3D, lighting, rendering, compositing, animation et montage de spots publicitaires.",
                    "Mise en place d'une solution d'IA pour réduire le temps d'attente du calcul des images."
                ]}
            />

            <Module_parcours
                number="3"
                titre="BLUE SPIRIT"
                date="2022 – 2023"
                content="Travail sur la série animée Netflix Blue Eye Samurai."
                secteur="FX ARTIST"
                missions={[
                    "Réalisation de diverses simulations de neige, fumée, poussière, feuilles ou bulles.",
                    "Réaliser des travaux de R&D pour l'équipe de production.",
                    "Gérer les délais courts et les contraintes de production."
                ]}
            />

            <Title className="body-section-title" size="2" color="maganta" content="[ 02 // ITINÉRAIRE ]" />
            <Slash className="body-index" content="INDEX: Formation // Entraînement" color="brown" />


            <Module_parcours
                number="1"
                titre="EPITECH"
                date="2025 – aujourd'hui"
                content="Pré-MSC (Bac+3 / +4 / +5) dans le cadre de votre reconversion professionnelle vers la cybersécurité."
                secteur="INFORMATIQUE"
                etablissement="EPITECH"
                cursus=
                <>
                    Parcours complet de 3 ans combinant mise à niveau technique et expertise en cybersécurité. <br />
                    Bac+3 (Pré-MSc) : Acquisition du socle technique fondamental.<br />
                    Bac+4 (MSc 1) : Sécurité opérationnelle et offensive.<br />
                    Bac+5 (MSc 2) : Expertise avancée, défense et gouvernance.<br />
                </>
                missions={["Administrer, durcir et sécuriser les systèmes, réseaux et environnements Cloud.",
                    "Réaliser des audits de sécurité et des tests d'intrusion (Pentest / Red Team).",
                    "Surveiller les infrastructures (SOC/SIEM), analyser les vulnérabilités et gérer les incidents.",
                    "Appliquer les démarches de conformité, gouvernance et analyse de risques (ISO 27001, EBIOS RM, NIS2)."]}

            />


            <Module_parcours
                number="2"
                titre="GRETA"
                date="2018 – 2022"
                content="Formation de veilleur en cybersécurité."
                secteur="CYBERSÉCURITÉ"
                etablissement="GRETA"
                cursus="Formation de niveau 5 (Bac+2) axée sur l'administration et la sécurisation des infrastructures réseaux et systèmes. Elle prépare à la supervision de la sécurité, à la détection des menaces par l'analyse de logs (SIEM) et à la gestion opérationnelle des incidents de cybersécurité. Le cursus intègre également la mise en place de correctifs, la sensibilisation des utilisateurs et la veille technologique et réglementaire."
                missions={[
                    "Déployer des systèmes d'information sécurisés.",
                    "Administrer et surveiller un système d'information.",
                    "Gérer les incidents de cybersécurité.",
                    "Contrôler les droits d'accès."
                ]}
            />


            <Module_parcours
                number="3"
                titre="IIM"
                date="2016 – 2017"
                content="Master en réalisation et animation 3D."
                secteur="3D / ART"
                etablissement="IIM"
                cursus="Formation d'expertise axée sur l'ensemble du pipeline de production numérique : de la pré-production (storyboard, concept art) à la post-production (rendering, compositing). Spécialisation en modélisation, rigging, animation, effets visuels et direction artistique, appliquée à la réalisation de projets complexes en conditions de studio (cinéma, jeu vidéo, publicité)."
            />

            <Module_parcours
                number={4}
                titre="IUT CACHAN"
                date="2015 – 2016"
                content="DUT Génie mécanique et productique."
                secteur="SCIENCES & TECHNIQUES"
                etablissement="IUT de Cachan"
                cursus="Formation technologique axée sur le cycle de vie des produits industriels : conception assistée par ordinateur (CAO), dimensionnement (RDM), méthodes de fabrication avancées (usinage, robotique) et gestion de production. Solide maîtrise des outils techniques appliquée à travers des projets pratiques et des stages en entreprise."
            />

            <Title id="projets-title" className="body-section-title" size="2" color="maganta" content="[ 03 // PROJETS ]" />
            <Slash className="body-index" content="INDEX: Réalisations // Projets" color="brown" />
            <section id="body-section-project">
                <Skill titre="Joaboard — EN COURS —" content="Réalisation d'un Joaboard en équipe. Technologies utilisées : React, MariaDB et FastAPI. Mise en place d'un backend pour accueillir différentes offres et souscriptions. Mise en place du front-end puis connexion à l'API. Le projet sera bientôt disponible sur le portfolio." />
                <Skill titre="Ce site !" content="Travail sur un portfolio pour promouvoir mon travail, réalisé en HTML/CSS avec un workflow React. J'espère que vous l'apprécierez !" />
                <a href="https://pioupious.github.io/Digital_Resume/" id="hover-Project">
                    <Skill titre="Réalisation d'un CV numérique" content={
                        <>
                            Création d'un CV numérique hébergé en ligne en HTML/CSS. C'est mon premier projet, soyez indulgent ;)
                            <br />
                            <br />
                            -- N'HÉSITEZ PAS À CLIQUER --
                        </>
                    } />
                </a>
            </section>
            <Title id="contact-section-title" className="body-section-title" size="2" color="maganta" content="[ XY // CONTACT ]" />
            <Slash className="body-index" content="INDEX: X SELECTIONS" color="brown" />


            <Contact_section />


        </>
    )
}        