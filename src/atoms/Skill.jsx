import "./Skill.css"

export default function Skill ({titre, content}) {
    return(
    <>
    <div className="module-skill">
        <p className="title-skill maganta small-title">{titre}</p>
        <p className="content-skill pink standar">{content}</p>
    </div>
    </>
    )
}       