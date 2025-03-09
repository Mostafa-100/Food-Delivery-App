import { useDispatch } from "react-redux";
import { setShowLogin, setShowSignup } from "../redux/auth";

function useShowSignupForm() {
  const dispatch = useDispatch();
  return () => {
    dispatch(setShowLogin(false));
    dispatch(setShowSignup(true));
  }
}

export default useShowSignupForm;