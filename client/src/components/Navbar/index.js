import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">
          React Google Books
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/saved"
                tabindex="-1"
                aria-disabled="true"
              >
                Saved
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
