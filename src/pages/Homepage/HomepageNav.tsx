function PageNav() {
  return (
    <div className="navbar bg-base-100 text-primary-content">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl ">
          <img src="vite.svg" alt="logo" /> 
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Paslon</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}

export default PageNav;
