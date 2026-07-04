import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
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
    </aside>
  );
}
