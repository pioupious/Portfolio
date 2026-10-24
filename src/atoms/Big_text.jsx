import "./Big_text.css"

export default function Big_text({ content, color }) {
    return (
        <p className={`atom-big-text medium ${color}`}>{content}</p>
    )
}