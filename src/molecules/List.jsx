import "./List.css"


export default function List ({ href, name, className = "" }) {
  return (
      <li className="molecule-nav-item">
        <a className={`molecule-nav-link liste pink medium ${className}`.trim()} href={href}>{name}</a>
      </li>
  );
}