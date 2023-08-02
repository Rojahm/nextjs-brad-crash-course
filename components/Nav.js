import Link from "next/link";
import styles from "@/styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav
        className={`${styles.container} navbar bg-dark border-bottom border-body navbar-expand-md`}
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand logo" href="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
