function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light-navy" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">
          <img
            src="/img/Logo.png"
            alt="Logo"
            className="logo"
            width="50"
            height="50"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-link-blue ms-3" href="#header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-blue ms-3" href="#about-me">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-blue ms-3" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-blue ms-3" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
