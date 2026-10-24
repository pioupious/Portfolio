import { useId, useState } from "react";
import Text_standard from "../atoms/Text_standard";
import "./Module_parcours.css";

export default function Module_parcours({
    number,
    titre,
    content,
    secteur,
    date,
    etablissement,
    cursus,
    missions = [],
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const detailsId = useId();

    return (
        <article className={`molecule-experience parcours${cursus ? " molecule-experience--training" : ""}`}>
            <button
                className="molecule-experience-toggle"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => setIsExpanded((expanded) => !expanded)}
            >
                <span className="molecule-experience-heading">
                    <span className="molecule-experience-number maganta">0{number}.</span>
                    <span className="molecule-experience-title">{titre}</span>
                    <span className="molecule-experience-sector brown">{secteur}</span>
                    {date && <span className="molecule-experience-date">{date}</span>}
                </span>
                <span className="molecule-experience-indicator" aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                </span>
            </button>

            <Text_standard content={content} color="pink" />

            {isExpanded && (
                <div className="molecule-experience-details" id={detailsId}>
                    {etablissement && (
                        <p>
                            <strong>Établissement :</strong> {etablissement}
                        </p>
                    )}
                    {cursus && (
                        <p>
                            <strong>Cursus :</strong> {cursus}
                        </p>
                    )}
                    {missions.length > 0 && (
                        <div>
                            <h3>{cursus ? "Contenu de la formation" : "Missions et réalisations"}</h3>
                            <ul>
                                {missions.map((mission) => <li key={mission}>{mission}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </article>
    );
}