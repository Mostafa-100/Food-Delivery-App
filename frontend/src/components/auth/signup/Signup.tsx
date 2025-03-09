import { setShowLogin, setShowSignup } from "../../../redux/auth";
import { useDispatch } from "react-redux";

import CloseButton from "../../CloseButton";
import Header from "../Header";
import SignupFormulaire from "./SignupFormulaire";

function Signup() {


  const dispatch = useDispatch();

  function closeAuthForm() {
    dispatch(setShowLogin(false));
    dispatch(setShowSignup(false));
  }

  return (
    <div className="absolute left-0 top-0 h-lvh w-full z-30 grid place-items-center mt-2">
      <div className="bg-white rounded-lg p-8 max-w-96 space-y-6 mx-3 md:mx-0">
        <div className="flex justify-between items-center">
          <Header title="Sign up" />
          <CloseButton onClick={closeAuthForm} />
        </div>
        <SignupFormulaire />
      </div>
    </div>
  );
}

export default Signup;
