import { useNavigate } from "react-router-dom";

function getStatusColor(status) {
  if (status === true || status === "Complete") return "bg-success";
  if (status === false || status === "Pending") return "bg-warning text-dark";
  if (status === "In-progress") return "bg-info text-dark";
  if (status === "Incomplete") return "bg-danger";
  return "bg-secondary";
}

function getStatusLabel(status) {
  if (status === true || status === "Complete") return "Complete";
  if (status === false || status === "Pending") return "Pending";
  return status || "Unknown";
}

export default function ProjectCard({ project, onEdit, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }}>
      <div className="card-body" onClick={() => navigate(`/projects/${project.project_id}`)}>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{project.name}</h5>
          <span className={`badge ${getStatusColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
        </div>
        <p className="card-text text-muted small">
          {project.description || "No description"}
        </p>
        <p className="card-text">
          <small className="text-muted">
            Due: {project.due_date || "No date"}
          </small>
        </p>
      </div>
      <div className="card-footer bg-transparent d-flex gap-2 justify-content-end">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={(e) => { e.stopPropagation(); onEdit(project); }}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={(e) => { e.stopPropagation(); onDelete(project.project_id); }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
