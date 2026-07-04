import { useState } from "react";
import taskList from "../data/tasks";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(taskList);
  const handleClick = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => navigate(`/task/${task.id}`)),
    );
  };

  return (
    <div>
      {taskList.map((task) => (
        <div onClick={handleClick} key={task.id} style={{ cursor: "pointer" }}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
