import { User } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-section">
        <div className="logo">T</div>
        <h2 className="logo-text">TaskFlow</h2>
      </div>

      <nav className="nav-links">
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/tasks">
              Tasks
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/team">
              Team
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="avatar">
        <User size={22} />
      </div>
    </header>
  );
}
