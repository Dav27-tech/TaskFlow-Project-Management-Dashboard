import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import "../styles/components/MemberCard.css";

export default function MemberCard({ member, onEdit, onDelete }) {
  const [imgError, setImgError] = useState(false);

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="member-card">
      <div className="member-card-header">
        <div className="member-card-avatar">
          {member.avatar && !imgError ? (
            <img
              src={member.avatar}
              alt={member.name}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="avatar-initials">{initials}</span>
          )}
        </div>
        <div className="member-card-actions">
          <button
            className="member-edit-btn"
            onClick={() => onEdit(member)}
            title="Edit member"
          >
            <Pencil size={16} />
          </button>
          <button
            className="member-delete-btn"
            onClick={() => onDelete(member.id)}
            title="Delete member"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <h4 className="member-card-name">{member.name}</h4>
      <p className="member-card-role">{member.role}</p>
      <p className="member-card-email">{member.email}</p>
    </div>
  );
}
