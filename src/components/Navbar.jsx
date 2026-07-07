import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo-section">
        <p className="logo">T</p>
        <p className="logo-text">TaskFlow</p>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/">Team</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
      <div className="avatar">
        <User />
      </div>
    </header>
  );
}
