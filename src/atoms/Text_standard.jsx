import "./Text_standard.css"

export default function Text_standard({content, color, id, className = ""}) {
    return (
        <p id={id} className={`atom-text-standard standard_text ${color} standard ${className}`.trim()}>
            {content}
        </p>
    )
}