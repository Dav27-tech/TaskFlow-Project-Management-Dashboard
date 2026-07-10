import projectList from "../data/projects";
import teamList from "../data/team_members";
import { useTasks } from "./Model";
import {
  FolderKanban,
  ListTodo,
  CircleCheckBig,
  Clock3,
  Users,
} from "lucide-react";
import "../styles/components/StatisticCard.css";

export default function StatisticCard() {
  const { tasks } = useTasks();

  const totalTask = tasks.length;
  const totalProject = projectList.length;
  const completedTasks = tasks.filter((task) => task.status).length;
  const pendingTasks = tasks.filter((task) => !task.status).length;

  return (
    <div className="statistics">
      <h1 className="statistics-title">Dashboard</h1>

      <div className="statistics-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <FolderKanban size={28} />
          </div>

          <div className="stat-content">
            <h3>Total Projects</h3>
            <span>{totalProject}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <ListTodo size={28} />
          </div>

          <div className="stat-content">
            <h3>Total Tasks</h3>
            <span>{totalTask}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <CircleCheckBig size={28} />
          </div>

          <div className="stat-content">
            <h3>Completed</h3>
            <span>{completedTasks}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Clock3 size={28} />
          </div>

          <div className="stat-content">
            <h3>Pending</h3>
            <span>{pendingTasks}</span>
          </div>
        </div>
      </div>

      <div className="team-card">
        <h2>Team Members</h2> <hr />
        <div className="team-list">
          {teamList.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-avatar">{member.name.charAt(0)}</div>

              <div>
                <h4>{member.name}</h4>

                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
