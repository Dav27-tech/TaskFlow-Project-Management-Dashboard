import { useState } from "react";
import taskList from "../data/tasks";
import teamList from "../data/team_members";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/Tasks.css";

export default function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(taskList);
  const handleClick = (id) => {
    navigate(`/tasks/${id}`);
  };

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

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && task.status) ||
      (statusFilter === "pending" && !task.status);

    const matchesPriority =
      priorityFilter === "all" ||
      task.priority.toLowerCase() === priorityFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const [newTask, setNewTask] = useState({
    project_id: 1,
    title: "",
    description: "",
    priority: "Medium",
    status: false,
    assigned_member: [],
    due_date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      ...newTask,
      id: tasks.length + 1,
    };

    setTasks((prev) => [...prev, task]);

    setNewTask({
      project_id: 1,
      title: "",
      description: "",
      priority: "Medium",
      status: false,
      assigned_member: [],
      due_date: "",
    });
  };

  const handleMemberChange = (memberId) => {
    setNewTask((prev) => {
      const alreadyAssigned = prev.assigned_member.includes(memberId);

      return {
        ...prev,
        assigned_member: alreadyAssigned
          ? prev.assigned_member.filter((id) => id !== memberId)
          : [...prev.assigned_member, memberId],
      };
    });
  };

  const updateField = (field, value) => {
    setNewTask((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="tasks-page">
      <div className="tasks-container">
        <aside className="create-task">
          <h2 className="section-title">Create Task</h2>

          <form onSubmit={handleSubmit}>
            <div className="row-input">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleChange}
                placeholder="Enter task title"
                required
              />
            </div>

            <div className="row-input">
              <label>Description</label>
              <textarea
                name="description"
                value={newTask.description}
                onChange={handleChange}
                placeholder="Enter task description"
                rows={4}
                required
              />
            </div>

            <div className="row-input">
              <label>Priority</label>
              <select
                name="priority"
                value={newTask.priority}
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="row-input">
              <label>Due Date</label>
              <DatePicker
                selected={parseDate(newTask.due_date)}
                onChange={(date) =>
                  updateField("due_date", date.toLocaleDateString("en-GB"))
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="Choose a due Date"
                className="date-picker"
              />
            </div>

            <div>
              <h3 className="assigned_title">Assigned Members</h3>
              <hr />

              {teamList.map((member) => (
                <div key={member.id} className="assigned_card">
                  <label>{member.name}</label>
                  <input
                    type="checkbox"
                    checked={newTask.assigned_member.includes(member.id)}
                    onChange={() => handleMemberChange(member.id)}
                  />
                </div>
              ))}
            </div>

            <button type="submit">Add Task</button>
          </form>
        </aside>

        <main>
          <SearchBar
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />

          <section className="tasks-list">
            <h2 className="section-title">Project Tasks</h2>

            {filteredTasks.toReversed().map((task) => (
              <div
                key={task.id}
                className="task-card"
                onClick={() => handleClick(task.id)}
              >
                <div className="task-header">
                  <h3>{task.title}</h3>

                  <span
                    className={
                      task.status ? "status completed" : "status pending"
                    }
                  >
                    {task.status ? "Completed" : "Pending"}
                  </span>
                </div>

                <p className="task-description">{task.description}</p>

                <div className="task-footer">
                  <span className="priority">{task.priority}</span>
                  <span>{task.due_date}</span>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
