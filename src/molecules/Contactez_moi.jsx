import pierreCancalon from "../assets/Pierre_Cancalon.jpg"
import "./Contactez_moi.css"

export default function Contact({ id = "contact-pierre" }) {
    return (
        <div id={id} className="contact-pierre">
            <img id="photo-pierre" src={pierreCancalon} alt="Portrait de Pierre Cancalon" />
            <a id="text-contact" className="medium pink" href="https://drive.google.com/file/d/14F5XnDT59TWLh3HsbEV32GKNtN1tNuhE/view?usp=sharing">
                Mail : pierrecancalon@gmail.com — Mon CV c'est ICI-- 
            </a>
        </div>
    )
}