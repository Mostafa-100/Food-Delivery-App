import AuthInput from "../AuthInput";

import SubmitButton from "../../SubmitButton";
import Info from "../Info";

import useLogUser from "../../../hooks/useLogUser";
import useShowSignupForm from "../../../hooks/useShowSignupForm";
import { useEffect, useState } from "react";
import UserNotExistErrorDisplay from "./UserNotExistErrorDisplay";
import { AxiosError, AxiosResponse } from "axios";

const inputs = [
  { name: "email", type: "email", label: "Your email" },
  { name: "password", type: "password", label: "Your password" },
]

function LoginFormulaire() {

  const mutation = useLogUser();
  const showSignupForm = useShowSignupForm();
  const [userNotExistError, setUserNotExistError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    mutation.mutate(formData);
  }

  useEffect(() => {
    if (mutation.error?.response?.data.email[0]) {
      setUserNotExistError(mutation.error?.response?.data.email[0]);
    } else {
      setUserNotExistError("");
    }
  }, [mutation.isError, mutation.isLoading])

  return (
    <form onSubmit={handleSubmit} >
      <div className="space-y-4">
        {
          inputs.map((input) => {
            return <AuthInput key={input.name} {...input} error={mutation.error?.response?.data} />
          })
        }
        {userNotExistError && <UserNotExistErrorDisplay message={userNotExistError} />}
        <SubmitButton label="Login" isLoading={mutation.isLoading} />
        <Info
          text="Create a new account?"
          label="Click here"
          onClick={showSignupForm}
        />
      </div>
    </form>
  )
}

export default LoginFormulaire;
