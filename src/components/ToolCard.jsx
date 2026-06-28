import { Link } from "react-router-dom";

function ToolCard({
  icon,
  title,
  description,
  link,
}) {
  return (
    <div className="card">

      <div className="icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <Link to={link}>
        <button>
          Open Tool
        </button>
      </Link>

    </div>
  );
}

export default ToolCard;