import "../Variable.css"
import List from "./List";
import "./Top_page.css"
import Slash from "../atoms/Slash";

export default function Top_page() {
  return (
    <div id="divtop">
         <p id="toptext" className="large maganta">Extrait d'archive // Pierre Cancalon </p>
         <Slash id="topslash" color="brown" content="// 20.5.00"/>
        <nav id="navtop">
            <ul id="ultop">
                <List className="listtop" href="#titlemaster" name="[ABOUT ME]" />
                <List className="listtop" href="#skills-title" name="[SKILL]" />
                <List className="listtop" href="#experience-title" name="[WORK]" />
                <List className="listtop" href="#projets-title" name="[PROJET]" />
                <List className="listtop" href="#contact-section-title" name="[CONTACT]" />
            </ul>
        </nav>
    </div>
  );
}