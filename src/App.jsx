import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoute />
    </BrowserRouter>
  );
}
