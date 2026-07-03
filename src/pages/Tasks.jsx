import taskList from "../data/tasks";
export default function Tasks() {
  const handleClick = () => {
    Navigate(`/task/${taskList.id}`);
  };

  return (
    <div>
      <div onClick={handleClick}></div>
    </div>
  );
}
