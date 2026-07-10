import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRoute";
import { TaskProvider } from "./components/Model";

export default function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Navbar />
        <AppRoute />
      </TaskProvider>
    </BrowserRouter>
  );
}
