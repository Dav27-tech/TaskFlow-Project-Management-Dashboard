import { useState, useRef } from "react";
import teamList from "../data/team_members";
import MemberCard from "../components/MemberCard";
import "../styles/pages/Team.css";

export default function Team() {
  const [members, setMembers] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("team_members") || "[]");
    const merged = [...stored, ...teamList];
    const seen = new Set();
    return merged.filter((m) => {
      if (seen.has(m.id)) return false;
      seen.add(m.id);
      return true;
    });
  });

  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const nextId = useRef(Math.max(0, ...members.map((m) => m.id)) + 1);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    avatar: "",
  });

  const syncLocalStorage = (allMembers) => {
    const stored = JSON.parse(localStorage.getItem("team_members") || "[]");
    const storedIds = new Set(stored.map((m) => m.id));
    const remaining = allMembers.filter((m) => storedIds.has(m.id));
    const newOnes = allMembers.filter((m) => !storedIds.has(m.id));
    localStorage.setItem(
      "team_members",
      JSON.stringify([...newOnes, ...remaining])
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.role.trim() || !formData.email.trim())
      return;

    const newMember = {
      id: nextId.current++,
      name: formData.name.trim(),
      role: formData.role.trim(),
      email: formData.email.trim(),
      avatar:
        formData.avatar.trim() ||
        `https://i.pravatar.cc/150?u=${Date.now()}`,
    };

    const updated = [newMember, ...members];
    setMembers(updated);
    syncLocalStorage(updated);
    setFormData({ name: "", role: "", email: "", avatar: "" });
  };

  const handleEdit = (member) => {
    setEditForm({ ...member });
    setEditing(member.id);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (
      !editForm.name.trim() ||
      !editForm.role.trim() ||
      !editForm.email.trim()
    )
      return;

    const updated = members.map((m) =>
      m.id === editing
        ? {
            ...editForm,
            name: editForm.name.trim(),
            role: editForm.role.trim(),
            email: editForm.email.trim(),
          }
        : m
    );
    setMembers(updated);
    syncLocalStorage(updated);
    setEditing(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to remove this team member?"))
      return;
    const updated = members.filter((m) => m.id !== id);
    setMembers(updated);
    syncLocalStorage(updated);
  };

  return (
    <div className="team-page">
      <div className="team-create-section">
        <h2 className="team-section-title">Add New Member</h2>
        <form onSubmit={handleSubmit} className="team-form">
          <div className="team-form-row">
            <div className="team-form-group">
              <label htmlFor="tm-name">Full Name</label>
              <input
                id="tm-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="team-form-group">
              <label htmlFor="tm-role">Role</label>
              <input
                id="tm-role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                required
              />
            </div>
          </div>
          <div className="team-form-row">
            <div className="team-form-group">
              <label htmlFor="tm-email">Email</label>
              <input
                id="tm-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. member@example.com"
                required
              />
            </div>
            <div className="team-form-group">
              <label htmlFor="tm-avatar">Avatar URL (optional)</label>
              <input
                id="tm-avatar"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="Leave blank for auto-generated"
              />
            </div>
          </div>
          <button type="submit" className="team-submit-btn">
            Add Member
          </button>
        </form>
      </div>

      <div className="team-grid-section">
        <div className="team-header">
          <h1 className="team-title">Team Members</h1>
          <span className="team-count">{members.length}</span>
        </div>

        {editing && (
          <div className="team-edit-overlay">
            <div className="team-edit-card">
              <h3>Edit Member</h3>
              <form onSubmit={handleEditSave} className="team-form">
                <div className="team-form-group">
                  <label>Full Name</label>
                  <input
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="team-form-group">
                  <label>Role</label>
                  <input
                    name="role"
                    value={editForm.role}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="team-form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="team-form-group">
                  <label>Avatar URL</label>
                  <input
                    name="avatar"
                    value={editForm.avatar}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="team-edit-actions">
                  <button type="submit" className="team-save-btn">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="team-cancel-btn"
                    onClick={() => setEditing(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="team-grid">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {members.length === 0 && (
          <div className="team-empty">
            <p>No team members yet. Add your first member above!</p>
          </div>
        )}
      </div>
    </div>
  );
}
