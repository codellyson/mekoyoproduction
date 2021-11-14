import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
const Navbar = ({ toggleDarkMode }) => {
  const [showNav, setShowNav] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScrollToView = (e) => {
      if (window.scrollY >= 140) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", handleScrollToView);
    return () => {
      window.removeEventListener("scroll", handleScrollToView);
    };
  }, []);

  const handleShowNav = () => (showNav ? setShowNav(false) : setShowNav(true));
  const closeNav = () => setShowNav(false);
  return (
    <nav
      className={
        nav
          ? "navbar navbar-expand-md bg-main-dark fixed-top py-4"
          : "navbar navbar-expand-md navbar-transparent fixed-top py-4"
      }
      aria-label="Fourth navbar example"
    >
      <div className="container">
        <a className="navbar-brand text-sharp-gold" href="#">
          Mr. Mekoyo
        </a>
        <span
          className="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleShowNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>

        <div
          className={`navbar-collapse mobile-menu ${showNav ? "active" : ""} `}
          id="navbarsExample04"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link href="/">
                <a className="text-white nav-link" onClick={closeNav}>
                  {" "}
                  Home{" "}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="text-white nav-link" onClick={closeNav}>
                  {" "}
                  About{" "}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/presets">
                <a className="text-white nav-link" onClick={closeNav}>
                  {" "}
                  Sample & Presets{" "}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mixing">
                <a className="text-white nav-link" onClick={closeNav}>
                  {" "}
                  Mixing & Mastering{" "}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tutorials">
                <a className="text-white nav-link" onClick={closeNav}>
                  {" "}
                  Tutorials{" "}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="text-white nav-link" onClick={closeNav}>
                  {" "}
                  Contact{" "}
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <FaArrowLeft className="left-arrow" onClick={closeNav} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
