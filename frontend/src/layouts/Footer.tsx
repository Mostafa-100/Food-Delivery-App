import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="px-2 py-16 text-white"
      style={{ backgroundColor: "#2F2C2F" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between">
          <div>
            <div className="text-3xl text-orange-600 font-bold">Tomato.</div>
            <div className="max-w-lg text-sm font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              iusto itaque placeat, perferendis vitae rerum voluptatem earum
              consectetur quod! Quas nulla exercitationem voluptatum facilis
              eligendi blanditiis a rem, corrupti numquam.
            </div>
            <div className="flex gap-1 mt-2">
              <div className="p-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors rounded-full">
                <a href="https://www.facebook.com">
                  <FaFacebookF />
                </a>
              </div>
              <div className="p-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors rounded-full">
                <a href="https://www.x.com">
                  <BsTwitterX />
                </a>
              </div>
              <div className="p-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors rounded-full">
                <a href="https://www.linkedin.com">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">COMPANY</h3>
            <ul>
              <li>
                <Link to="/" className="font-thin">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="font-thin">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="font-thin">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="font-thin">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">GET IN TOUCH</h3>
            <div className="font-thin">+1-212-4569-8799</div>
            <div className="font-thin">contact@tomato.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
