import { setShowLogin, setShowSignup } from "../../redux/auth";
import { useDispatch } from "react-redux";

import { useMutation } from "react-query";

import AuthInput from "./AuthInput";
import CloseButton from "../CloseButton";
import SubmitButton from "../SubmitButton";
import Info from "./Info";
import Header from "./Header";
import apiClient from "../../api/apiClient";

function Signup() {
  const mutation = useMutation(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    return await apiClient.post("/api/register", formData);
  });

  const dispatch = useDispatch();

  function closeAuthForm() {
    dispatch(setShowLogin(false));
    dispatch(setShowSignup(false));
  }

  function showLoginForm() {
    dispatch(setShowSignup(false));
    dispatch(setShowLogin(true));
  }

  return (
    <div className="absolute left-0 top-0 h-lvh w-full z-30 grid place-items-center mt-2">
      <form
        className="bg-white rounded-lg p-8 max-w-96 space-y-6 mx-3 md:mx-0"
        onSubmit={mutation.mutate}
      >
        <div className="flex justify-between items-center">
          <Header title="Sign up" />
          <CloseButton onClick={closeAuthForm} />
        </div>
        <div className="space-y-4">
          <AuthInput
            name="name"
            type="text"
            label="Your name"
            error={mutation.error?.response?.data?.errors?.name}
          />
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
          <SubmitButton
            label="Create account"
            isLoading={mutation.isLoading}
            isSuccess={mutation.isSuccess}
            successLabel="You can log in now"
          />
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" required />
            <label htmlFor="checkbox" className="text-sm text-gray-600">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
          <Info
            text="Already have an account?"
            label="Login here"
            onClick={showLoginForm}
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
