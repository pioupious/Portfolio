import "./Point.css"

export default function Point({ id, className = "" }) {
    return (
        <div id={id} className={`point atom-point ${className}`.trim()}>
        </div>
    )
}