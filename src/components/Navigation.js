import react from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
