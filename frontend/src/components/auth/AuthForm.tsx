import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import Login from "./login/Login.tsx";
import Signup from "./signup/Signup.tsx";

function AuthForm() {
  const { showLogin, showSignup } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <>
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </>
  );
}

export default AuthForm;
