import taskList from "../data/tasks";
import projectList from "../data/projects";
import teamList from "../data/team_members";

export default function StatisticCard() {
  const total_task = taskList.length;
  const total_project = projectList.length;
  const completed_tasks = taskList.filter(
    (task) => task.status === true,
  ).length;
  const pending_tasks = taskList.filter((task) => task.status === false).length;
  return (
    <div>
      <h1>Statistics</h1>
      <p>Total Projects: {total_project}</p>
      <p>Total Tasks: {total_task}</p>
      <p>Completed Tasks: {completed_tasks}</p>
      <p>Pending tasks: {pending_tasks}</p>
      <div>
        <h3>Team Members</h3>
        {teamList.map((member) => (
          <p>{member.name}</p>
        ))}
      </div>
    </div>
  );
}
