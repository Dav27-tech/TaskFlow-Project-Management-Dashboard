import { useState, useRef } from "react";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const nextId = useRef(200);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Pending",
    due_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.due_date) return;

    const newProject = {
      ...formData,
      name: formData.name.trim(),
      description: formData.description.trim(),
      project_id: nextId.current++,
    };

    const existing = JSON.parse(localStorage.getItem("projects") || "[]");
    existing.unshift(newProject);
    localStorage.setItem("projects", JSON.stringify(existing));

    setFormData({
      name: "",
      description: "",
      status: "Pending",
      due_date: "",
    });
  };

  return (
    <aside className="sidebar">
      <h2>TaskFlow</h2>

      <h3>New Project</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="project-name">Project Name</label>
          <input
            id="project-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter project name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-desc">Description</label>
          <textarea
            id="project-desc"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-status">Status</label>
          <select
            id="project-status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Complete">Complete</option>
            <option value="Pending">Pending</option>
            <option value="Incomplete">Incomplete</option>
            <option value="In-progress">In-progress</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="project-due">Due Date</label>
          <input
            id="project-due"
            type="date"
            name="due_date"
            value={formData.due_date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </aside>
  );
}
