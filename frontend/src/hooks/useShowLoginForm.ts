import { useDispatch } from "react-redux";
import { setShowLogin, setShowSignup } from "../redux/auth";

function useShowLoginForm() {
  const dispatch = useDispatch();
  return () => {
    dispatch(setShowSignup(false));
    dispatch(setShowLogin(true));
  }
}

export default useShowLoginForm;