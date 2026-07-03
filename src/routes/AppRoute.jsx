// Import React router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import pages
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import TaskDetails from "../pages/TaskDetails";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
    </Routes>
  );
}
