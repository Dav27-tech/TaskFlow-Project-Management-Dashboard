import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import teamList from "../data/team_members";
import { useTasks } from "./Model";
// Import icons from lucide-react
import {
  ArrowLeft,
  Pencil,
  Save,
  X,
  CalendarDays,
  Flag,
  CircleCheckBig,
  Clock3,
  Users,
  FileText,
  Type,
} from "lucide-react";
// Import the page CSS style
import "../styles/components/TaskCard.css";
// Import the Datetimepicker
import DatePicker from "react-datepicker";

export default function TaskCard() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { tasks, setTasks } = useTasks();

  const task = useMemo(
    () => tasks.find((t) => t.id === Number(id)),
    [tasks, id],
  );

  const parseDate = (dateString) => {
    if (!dateString) {
      return null;
    }

    const parts = dateString.split("/");
    if (parts.length !== 3) {
      return null;
    }

    const [day, month, year] = parts;
    const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));

    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  if (!task) {
    return <h2>Task not found</h2>;
  }

  const [editingTask, setEditingTask] = useState(null);

  const handleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task,
      ),
    );
  };

  const handleEdit = (task) => {
    setEditingTask({ ...task });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditingTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id ? editingTask : task,
      ),
    );

    setEditingTask(null);
  };

  const handleMemberChange = (memberId) => {
    setEditingTask((prev) => {
      const alreadyAssigned = prev.assigned_member.includes(memberId);

      return {
        ...prev,
        assigned_member: alreadyAssigned
          ? prev.assigned_member.filter((id) => id !== memberId)
          : [...prev.assigned_member, memberId],
      };
    });
  };

  return (
    <div className="task-card-page">
      <div className="task-card-container">
        {editingTask && editingTask.id === task.id ? (
          <div className="edit-task">
            <h2 className="task-title">Edit Task</h2>

            <div className="form-group">
              <label>Title</label>

              <input
                className="task-input"
                name="title"
                value={editingTask.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                className="task-textarea"
                name="description"
                value={editingTask.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Priority</label>

                <select
                  className="task-select"
                  name="priority"
                  value={editingTask.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="form-group">
                <label>Due Date</label>

                <DatePicker
                  selected={parseDate(editingTask.due_date)}
                  onChange={(date) =>
                    setEditingTask((prev) => ({
                      ...prev,
                      due_date: date.toLocaleDateString("en-GB"),
                    }))
                  }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Choose due date"
                  className="date-picker"
                />
              </div>
            </div>

            <div className="form-group">
              <h3>Assigned Members</h3>

              <div className="members-list">
                {teamList.map((member) => (
                  <div className="checkbox-item" key={member.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={editingTask.assigned_member.includes(
                          member.id,
                        )}
                        onChange={() => handleMemberChange(member.id)}
                      />

                      {member.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="button-group">
              <button className="save-btn" onClick={handleSave}>
                <Save size={18} />
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => setEditingTask(null)}
              >
                <X size={18} />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="task-details">
            <div className="title">
              <h1>Task Details</h1>
            </div>
            <button className="back-btn" onClick={() => navigate("/tasks")}>
              <ArrowLeft size={18} />
              Back
            </button>

            <div className="task-header">
              <h2>{task.title}</h2>

              <span
                className={task.status ? "status completed" : "status pending"}
                onClick={() => handleStatus(task.id)}
              >
                {task.status ? (
                  <CircleCheckBig size={18} />
                ) : (
                  <Clock3 size={18} />
                )}
                {task.status ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="task-info">
              <p>
                <strong>Description :</strong>
                {task.description}
              </p>

              <p>
                <strong>Priority :</strong>
                {task.priority}
              </p>

              <p>
                <strong>Due Date :</strong>
                {task.due_date}
              </p>
            </div>

            <div className="assigned-members">
              <h3>Assigned Members</h3>

              <div className="members-list">
                {task.assigned_member.map((memberId) => {
                  const member = teamList.find((m) => m.id === memberId);

                  return (
                    <div className="member-card" key={memberId}>
                      <div className="member-avatar">
                        {member?.name.charAt(0)}
                      </div>

                      <span>{member?.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="edit-btn" onClick={() => handleEdit(task)}>
              <Pencil size={18} />
              Edit Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
