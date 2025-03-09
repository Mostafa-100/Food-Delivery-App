import SubmitButton from "../../SubmitButton";
import AuthInput from "../AuthInput";
import Info from "../Info";
import useRegisterUser from "../../../hooks/useRegisterUser";
import useShowLoginForm from "../../../hooks/useShowLoginForm";
import TermsOfUse from "./TermsOfUse";

const inputs = [
  { name: "name", type: "text", label: "Your name" },
  { name: "email", type: "email", label: "Your email" },
  { name: "password", type: "password", label: "Your password" },
]

function SignupFormulaire() {

  const mutation = useRegisterUser();
  const showLoginForm = useShowLoginForm();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    mutation.mutate(formData);
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="space-y-4">
        {
          inputs.map((input) => {
            return <AuthInput key={input.name} {...input} error={mutation.error?.response?.data?.errors?.name} />
          })
        }
        <SubmitButton
          label="Create account"
          isLoading={mutation.isLoading}
          isSuccess={mutation.isSuccess}
          successLabel="You can log in now"
        />
        <TermsOfUse />
        <Info
          text="Already have an account?"
          label="Login here"
          onClick={showLoginForm}
        />
      </div>
    </form>
  )
}

export default SignupFormulaire;