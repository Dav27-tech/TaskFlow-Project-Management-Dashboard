import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Tasks from "../pages/Tasks";
import TaskDetails from "../pages/TaskDetails";
import Team from "../pages/Team";
import About from "../pages/About";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
