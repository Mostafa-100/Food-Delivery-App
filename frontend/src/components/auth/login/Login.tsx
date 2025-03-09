import { useDispatch } from "react-redux";
import LoginFormulaire from "./LoginFormulaire";
import CloseButton from "../../CloseButton";
import Header from "../Header";
import { setShowLogin, setShowSignup } from "../../../redux/auth";

function Login() {
  const dispatch = useDispatch();

  function closeAuthForm() {
    dispatch(setShowLogin(false));
    dispatch(setShowSignup(false));
  }

  return (
    <div className="absolute left-0 top-0 h-lvh w-full z-30 grid place-items-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-96 space-y-6 mx-3 md:mx-0">
        <div className="flex justify-between items-center">
          <Header title="Login" />
          <CloseButton onClick={closeAuthForm} />
        </div>
        <LoginFormulaire />
      </div>
    </div>
  );
}

export default Login;
