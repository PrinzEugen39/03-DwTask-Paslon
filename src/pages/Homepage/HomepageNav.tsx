import { Link } from "react-router-dom";

function PageNav() {
  return (
    <div className="navbar bg-base-100 text-primary-content z-[99]">
      <div className="navbar-start">
        <p className="btn btn-ghost normal-case text-xl ">
          <Link to="/">
            <img src="vite.svg" alt="logo" />
          </Link>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Paslon</p>
          </li>
          <li>
            <Link to="/contact">
              <p>Contact</p>
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
