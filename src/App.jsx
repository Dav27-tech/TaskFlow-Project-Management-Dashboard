// Import the React router
import { BrowserRouter } from "react-router-dom";
// Import the App router
import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <AppRoute />
        </main>
      </BrowserRouter>
    </>
  );
}
