import { useState } from "react";
import taskList from "../data/tasks";
import teamList from "../data/team_members";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(taskList);
  const handleClick = (id) => {
    navigate(`/task/${id}`);
  };

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    // Filter by search by title and description
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    // Filter by status
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

  return (
    <div>
      <button onClick={() => navigate("/")}>Return</button>

      <SearchBar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />

      {filteredTasks.map((task) => (
        <>
          <div
            onClick={() => handleClick(task.id)}
            key={task.id}
            style={{ cursor: "pointer" }}
          >
            <h2>{task.title}</h2>
            <div>
              <p>Status : {task.status ? "Completed" : "Pending"}</p>
              <p>Priority : {task.priority}</p>
            </div>
            <p>{task.description}</p>
          </div>
        </>
      ))}

      <div>
        <h3>Create Task</h3>
        <form onSubmit={handleSubmit}>
          <div>
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

          <div>
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

          <div>
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

          <div>
            <label>Due Date</label>
            <input
              type="date"
              name="due_date"
              value={newTask.due_date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Assigned Members</label>

            {teamList.map((member) => (
              <div key={member.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={newTask.assigned_member.includes(member.id)}
                    onChange={() => handleMemberChange(member.id)}
                  />

                  {member.name}
                </label>
              </div>
            ))}
          </div>

          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
}
