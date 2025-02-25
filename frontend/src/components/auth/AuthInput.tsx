type AuthInputProps = {
  name: string;
  type: string;
  label: string;
  error?: string[] | undefined;
};

function AuthInput({ type, name, label, error }: AuthInputProps) {
  const errorMessage = Array.isArray(error) ? error[0] : null;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={label}
        className={`w-full px-4 py-2 border ${
          errorMessage ? "border-red-500" : "focus:ring-2 focus:ring-orange-500"
        } rounded-lg focus:outline-none `}
      />
      {errorMessage && (
        <div className="text-sm text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default AuthInput;
