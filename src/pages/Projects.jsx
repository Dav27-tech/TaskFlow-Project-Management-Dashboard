import { useState } from "react";
import projectList from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Sidebar from "../components/Sidebar";

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("projects") || "[]");
    const merged = [...stored, ...projectList];
    const seen = new Set();
    return merged.filter((p) => {
      if (seen.has(p.project_id)) return false;
      seen.add(p.project_id);
      return true;
    });
  });

  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (project) => {
    setEditForm({ ...project });
    setEditing(project.project_id);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) return;

    const updated = projects.map((p) =>
      p.project_id === editing ? editForm : p
    );
    setProjects(updated);
    syncLocalStorage(updated);
    setEditing(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    const updated = projects.filter((p) => p.project_id !== id);
    setProjects(updated);
    syncLocalStorage(updated);
  };

  const syncLocalStorage = (allProjects) => {
    const stored = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedIds = new Set(stored.map((p) => p.project_id));
    const remaining = allProjects.filter((p) => storedIds.has(p.project_id));
    const newOnes = allProjects.filter((p) => !storedIds.has(p.project_id));
    localStorage.setItem("projects", JSON.stringify([...newOnes, ...remaining]));
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <main style={{ marginLeft: "320px", flex: 1, padding: "2rem" }}>
        {editing ? (
          <div className="card p-4" style={{ maxWidth: "600px" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Edit Project</h3>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setEditing(null)}>
                Back
              </button>
            </div>
            <form onSubmit={handleEditSave}>
              <div className="mb-3">
                <label className="form-label">Project Name</label>
                <input
                  className="form-control"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  rows="3"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={editForm.status}
                  onChange={handleEditChange}
                >
                  <option value="Complete">Complete</option>
                  <option value="Pending">Pending</option>
                  <option value="Incomplete">Incomplete</option>
                  <option value="In-progress">In-progress</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Due Date</label>
                <input
                  className="form-control"
                  type="date"
                  name="due_date"
                  value={editForm.due_date}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => setEditing(null)}>Cancel</button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <h1 className="mb-4">Projects</h1>

            <div className="row g-4">
              {projects.map((project) => (
                <div key={project.project_id} className="col-md-6 col-lg-4">
                  <ProjectCard
                    project={project}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </div>
              ))}
            </div>

            {projects.length === 0 && (
              <div className="text-center text-muted py-5">
                <p>No projects yet. Create your first project in the sidebar!</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
