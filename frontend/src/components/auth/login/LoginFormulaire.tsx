import AuthInput from "../AuthInput";
import SubmitButton from "../../SubmitButton";
import Info from "../Info";
import useLogUser from "../../../hooks/useLogUser";
import useShowSignupForm from "../../../hooks/useShowSignupForm";
import UserNotExistErrorDisplay from "./UserNotExistErrorDisplay";

const inputs = [
  { name: "email", type: "email", label: "Your email" },
  { name: "password", type: "password", label: "Your password" },
];

function LoginFormulaire() {
  const { mutation, errors, userNotExistError } = useLogUser();
  const showSignupForm = useShowSignupForm();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    mutation.mutate(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {inputs.map((input) => {
          return <AuthInput key={input.name} {...input} error={errors[input.name]} />;
        })}
        {userNotExistError && <UserNotExistErrorDisplay message={userNotExistError[0]} />}
        <SubmitButton label="Login" isLoading={mutation.isLoading} />
        <Info
          text="Create a new account?"
          label="Click here"
          onClick={showSignupForm}
        />
      </div>
    </form>
  );
}

export default LoginFormulaire;
