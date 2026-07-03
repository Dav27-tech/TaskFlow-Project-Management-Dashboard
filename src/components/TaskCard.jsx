import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import taskList from "../data/tasks";
import teamList from "../data/team_members";

export default function TaskCard() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [tasks, setTasks] = useState(taskList);

  const task = tasks.find((t) => t.id === Number(id));
  console.log(tasks.map((t) => t.id));
  console.log(Number(id));
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

  return (
    <div>
      <div key={task.id}>
        {editingTask && editingTask.id === task.id ? (
          <>
            <input
              name="title"
              value={editingTask.title}
              onChange={handleChange}
            />

            <textarea
              name="description"
              value={editingTask.description}
              onChange={handleChange}
            />

            <input
              name="priority"
              value={editingTask.priority}
              onChange={handleChange}
            />

            <input
              name="due_date"
              value={editingTask.due_date}
              onChange={handleChange}
            />

            <button onClick={handleSave}>Save</button>

            <button onClick={() => setEditingTask(null)}>Cancel</button>
          </>
        ) : (
          <>
            <div>
              <h2>{task.title}</h2>

              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleStatus(task.id)}
              >
                {task.status ? "Completed" : "Pending"}
              </p>
            </div>

            <div>
              <p>{task.description}</p>
              <p>{task.priority}</p>
              <p>{task.due_date}</p>
            </div>

            <div>
              <h3>Assigned Members</h3>

              {task.assigned_member.map((member, index) => (
                <p key={index}>{teamList[index].name}</p>
              ))}
            </div>

            <button onClick={() => handleEdit(task)}>Edit</button>
          </>
        )}

        <hr />
      </div>
    </div>
  );
}
