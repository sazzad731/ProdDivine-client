import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
const Footer = () => {

  return (
    <footer className="bg-first">
      <div className="footer flex justify-between flex-col sm:flex-row text-neutral-content p-10 max-w-[93.75rem] mx-auto">
        <aside>
          <NavLink to="/" className="text-2xl font-bold dark:text-neutral">
            ProdDivine
          </NavLink>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ProdDivine
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
