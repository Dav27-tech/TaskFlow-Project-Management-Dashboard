// Import the React router
import { BrowserRouter } from "react-router-dom";
// Import the App router
import AppRoute from "./routes/AppRoute";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}
