import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="hidden sm:flex gap-x-3 items-center">
      <li>
        <Link to="/" className="hover:underline transition-all">
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu" className="hover:underline transition-all">
          Menu
        </Link>
      </li>
      <li>
        <Link to="/mobile-app" className="hover:underline transition-all">
          Mobile App
        </Link>
      </li>
      <li>
        <Link to="/contact-us" className="hover:underline transition-all">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
