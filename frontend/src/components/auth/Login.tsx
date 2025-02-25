import { useDispatch } from "react-redux";
import { setIsLoggedIn, setShowLogin, setShowSignup } from "../../redux/auth";

import { useMutation } from "react-query";

import AuthInput from "./AuthInput";
import SubmitButton from "../SubmitButton";
import CloseButton from "../CloseButton";
import Info from "./Info";
import Header from "./Header";

import apiClient from "../../api/apiClient";

function Login() {
  const dispatch = useDispatch();

  const mutation = useMutation(async (data: FormData) => {
    return await apiClient.post("/api/login", data);
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    mutation.mutate(formData, {
      onSuccess: (response) => {
        localStorage.setItem("token", response.data?.token);
        dispatch(setIsLoggedIn(true));
        dispatch(setShowLogin(false));
        dispatch(setShowSignup(false));
      },
      // onError: (error) => console.log(error),
    });
  }

  function closeAuthForm() {
    dispatch(setShowLogin(false));
    dispatch(setShowSignup(false));
  }

  function showSignupForm() {
    dispatch(setShowLogin(false));
    dispatch(setShowSignup(true));
  }

  return (
    <div className="absolute left-0 top-0 h-lvh w-full z-30 grid place-items-center">
      <form
        className="bg-white rounded-lg p-8 w-full max-w-96 space-y-6 mx-3 md:mx-0"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center">
          <Header title="Login" />
          <CloseButton onClick={closeAuthForm} />
        </div>
        <div className="space-y-4">
          <AuthInput
            name="email"
            type="email"
            label="Your email"
            error={mutation.error?.response?.data?.errors?.email}
          />
          <AuthInput
            name="password"
            type="password"
            label="Your password"
            error={mutation.error?.response?.data?.errors?.password}
          />
          <SubmitButton label="Login" isLoading={mutation.isLoading} />
          <Info
            text="Create a new account?"
            label="Click here"
            onClick={showSignupForm}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
