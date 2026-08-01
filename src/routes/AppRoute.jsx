// Import React router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import pages
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import TaskDetails from "../pages/TaskDetails";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/task/:id" element={<TaskDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
