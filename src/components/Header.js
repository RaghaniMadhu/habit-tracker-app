import { Link, NavLink } from "react-router-dom";
import "../components/components.css";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "red" : "",
});

function Header() {
  return (
    <nav className="header">
      <div className="app-name">
        <Link to="/" className="link">
          <h1>Habit Tracker App</h1>
        </Link>
      </div>
      <div className="paths">
        <NavLink to="/" style={getActiveStyle} className="link">
          Home
        </NavLink>
        <NavLink to="/archive" style={getActiveStyle} className="link">
          Archive
        </NavLink>
        <NavLink to="/deleted" style={getActiveStyle} className="link">
          Trash
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
