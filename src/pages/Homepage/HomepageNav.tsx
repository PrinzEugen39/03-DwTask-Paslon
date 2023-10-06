import { Link } from "react-router-dom";

function PageNav() {
  return (
    <div className="navbar bg-base-100 text-primary-content z-[99]">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl ">
          <Link to="/">
            <img src="vite.svg" alt="logo" />
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Paslon</a>
          </li>
          <li>
            <Link to="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-accent font-bold">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNav;
