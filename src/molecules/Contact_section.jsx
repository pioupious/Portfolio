import { useState } from "react"
import Form from "../atoms/Form"
import Slash from "../atoms/Slash"
import "./Contact_section.css"

export default function Contact_section() {
  const [submitMessage, setSubmitMessage] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitMessage("Envoi indisponible : aucun service d'envoi n'est configuré.")
  }

  return (
    <div id="contact-section">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="contact-fields">
          <Form placeholder="Ex: Pierre Cancalon" type="text" nom="callsign" content="NOM / CALLSIGN :" />
          <Form placeholder="vance@vault111.robco" type="email" nom="email" content="FRÉQUENCE / EMAIL :"/>
        </div>

        <div id="contact-message-group" className="form-group">
          <label className=" pink medium"htmlFor="message">MESSAGE :</label>
          <textarea id="message" name="message" rows="5" placeholder="Détails de l'intervention ou requête de liaison cybernétique..."  required/>
        </div>

        <button id="submit-btn" type="submit">[ ÉMETTRE LA TRANSMISSION ]</button>
        {submitMessage && <p id="contact-submit-message" role="status">{submitMessage}</p>}
      </form>

      <div id="contact-sidebar">
        <h3 id="contact-title" className="pink medium">RÉSEAUX & LIAISONS DIRECTES</h3>

        <ul id="contact-links">
          <li><a className="lien gray small" href="https://github.com/pioupious">{"[>] COMM-NET // GITHUB"}</a></li>
          <li><a className="lien gray small" href="https:// www.linkedin.com/in/pierre-cancalon-3aa4a5151">{"[>] HOLONET // LINKEDIN"}</a></li>
          <li><span id="radio-link" className="lien small gray">{"[>] RADIO // 108.4 MHz"}</span></li>
        </ul>

        <Slash content={" NEO-SHINJUKU CANAL SÉCURISÉ CLASSE-IV"} color="brown" />
      </div>
    </div>
  )
}