import { useDispatch } from "react-redux";
import { setShowLogin } from "../../redux/auth";

function SignInButton() {
  const dispatch = useDispatch();
  return (
    <button
      className="block rounded-full bg-transparent hover:bg-indigo-100 transition-colors border border-indigo-900 text-indigo-900 px-6 py-1"
      onClick={() => dispatch(setShowLogin(true))}
    >
      Sign in
    </button>
  );
}

export default SignInButton;
