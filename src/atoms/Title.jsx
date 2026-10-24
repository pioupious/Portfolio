
import "./Title.css";

export default function Title({ size, content, color, id, className = "" }) {
    const classes = `atom-title ${color ?? ""} ${className}`.trim();

    switch (size) {
        case "1":
            return <h1 id={id} className={`atom-title--1 title-1 ${classes}`}>{content}</h1>
        case "2":
            return <h2 id={id} className={`atom-title--2 title-2 ${classes}`}>{content}</h2>
        case "3":
            return <h3 id={id} className={`atom-title--3 title-3 ${classes}`}>{content}</h3>
        default:
            return <h1 id={id} className={`atom-title--1 title-1 atom-title ${className}`.trim()}>{content}</h1>;
    }
}