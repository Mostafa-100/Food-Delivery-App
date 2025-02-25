import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";

import Dropdown from "./Dropdown";
import SignInButton from "./SignInButton";
import SearchButton from "./SearchButton";
import NavList from "./NavList";
import Logo from "./Logo";
import CartButton from "./CartButton";

function Navbar() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <nav>
      <div className="container mx-auto px-2 sm:px-0">
        <div className="flex justify-between py-5">
          <Logo />
          <NavList />
          <div className="flex items-center gap-x-3">
            <SearchButton />
            <CartButton />
            {isLoggedIn ? <Dropdown /> : <SignInButton />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
