import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link className="logo" to="/">
        🔐 Password Lab
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

      </div>

    </nav>
  );
}

export default Navbar;