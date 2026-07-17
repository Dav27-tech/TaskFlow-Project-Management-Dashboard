import { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import projectList from "../data/projects";
import taskList from "../data/tasks";
import teamList from "../data/team_members";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    const stored = JSON.parse(localStorage.getItem("projects") || "[]");
    const allProjects = [...stored, ...projectList];
    return allProjects.find((p) => p.project_id === Number(id));
  }, [id]);

  const tasks = useMemo(
    () => taskList.filter((t) => t.project_id === Number(id)),
    [id]
  );

  const completedTasks = tasks.filter((t) => t.status).length;
  const progress = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0;

  if (!project) {
    return (
      <div className="container mt-4 text-center">
        <h2>Project not found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/projects")}>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate("/projects")}>
        Back to Projects
      </button>

      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h1 className="card-title mb-0">{project.name}</h1>
            <span className={`badge fs-6 ${getStatusColor(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>
          </div>

          <p className="text-muted mb-3">{project.description || "No description"}</p>

          <div className="mb-2">
            <strong>Due Date:</strong> {project.due_date || "Not set"}
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-between mb-1">
              <strong>Progress</strong>
              <span>{progress}%</span>
            </div>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress > 0 && `${progress}%`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-3">
        Tasks ({completedTasks}/{tasks.length} completed)
      </h3>

      {tasks.length === 0 ? (
        <p className="text-muted">No tasks associated with this project.</p>
      ) : (
        <div className="row g-3">
          {tasks.map((task) => (
            <div key={task.id} className="col-md-6">
              <Link to={`/tasks/${task.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">{task.title}</h5>
                      <span className={`badge ${task.status ? "bg-success" : "bg-warning text-dark"}`}>
                        {task.status ? "Done" : "Pending"}
                      </span>
                    </div>
                    <p className="card-text text-muted small mb-2">
                      {task.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className={`badge bg-${task.priority === "High" ? "danger" : task.priority === "Medium" ? "info" : "secondary"} me-2`}>
                        {task.priority}
                      </span>
                      <small className="text-muted">
                        {task.assigned_member.map((mId) => {
                          const member = teamList.find((m) => m.id === mId);
                          return member?.name;
                        }).filter(Boolean).join(", ") || "Unassigned"}
                      </small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
