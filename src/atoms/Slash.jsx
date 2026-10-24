import "./Slash.css"

export default function Slash({ content, color, id, className = "" }) {
    return (
        <p id={id} className={`atom-slash TexteBody ${color} ${className}`.trim()}>{content}</p>
            )
}