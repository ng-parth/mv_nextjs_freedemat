import Link from "next/link";

function NavBar(props) {
  const { activeLink = "home" } = props;
  const navItems = [
    { key: "home", title: "Home", link: "/" },
    { key: "aboutUs", title: "About Us", link: "/about-us" },
    { key: "services", title: "Services", link: "/services" },
    { key: "contactUs", title: "Contact Us", link: "/contact-us" },
  ];

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd", boxShadow: "0 5px 5px #e1e1e1" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {/* Free Demat A/C */}
          {/* <img className="nav-logo" src="./assets/logos/Free-Demat-AC.jpg" alt="main logo" /> */}
          <img
            className="nav-logo"
            src="./assets/logos/Yellow-and-Black-Logo.png"
            alt="main logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(({ key, title, link }) => (
              <li className="nav-item" key={key}>
                <Link
                  className={`nav-link ${activeLink === key ? "active" : ""}`}
                  aria-current="page"
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
