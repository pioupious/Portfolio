import Big_text from "../atoms/Big_text"
import "./Enjoliement.css"

export default function Enjoliement({ id }) {
    return (
        <>
            <section id={id}>
                <div className="molecule-profile-detail">
                    <Big_text content="Localisation :" color="brown" />
                    <Big_text content="Paris / Next-Rennes // Secteur XX" color="maganta" />
                </div>
                <div className="molecule-profile-detail">
                    <Big_text content="Disponibilité :" color="brown" />
                    <Big_text content="Missions en cours // WAITING" color="cyan" />
                </div>
                <div className="molecule-profile-detail">
                    <Big_text content="Spécialité :" color="brown" />
                    <Big_text content="Administration système & cybersécurité" color="pink" />
                </div>  
            </section>
        </>
    )
}