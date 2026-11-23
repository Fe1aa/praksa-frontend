function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 footer-text">© 2025 Company, Inc</p>
        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          aria-label="Bootstrap"
        >
          <img src="img/Logo.png" alt="My logo" class="bi me-2 footer-logo" />
        </a>
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 footer-text">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 footer-text">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 footer-text">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 footer-text">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 footer-text">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
