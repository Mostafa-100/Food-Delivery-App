import { FaUser } from "react-icons/fa";

import { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../redux/auth";

import apiClient from "../../api/apiClient";

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  async function logout() {
    await apiClient.post("/api/logout", {}, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    });

    localStorage.removeItem("token");
    dispatch(setIsLoggedIn(false));

    window.location.pathname = "/";
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="block rounded-full bg-transparent hover:bg-indigo-100 transition-colors border border-indigo-900 text-indigo-900 p-2"
      >
        <FaUser />
      </button>
      <ul
        className={`${showDropdown ? "block" : "hidden"
          } absolute bg-white shadow-xl rounded-lg z-50 right-0 top-12`}
      >
        <li>
          <button
            onClick={() => setShowDropdown(false)}
            className="inline-block px-10 py-1 w-full font-light rounded-t-lg hover:bg-neutral-200 transition-colors"
          >
            Profile
          </button>
        </li>
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/orders"
            className="inline-block px-10 py-1 font-light hover:bg-neutral-200 transition-colors"
          >
            Orders
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setShowDropdown(false);
              logout();
            }}
            className="inline-block px-10 py-1 font-light rounded-b-lg hover:bg-neutral-200 transition-colors"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
