function TermsOfUse() {
  return (
    <div className="flex items-start gap-2">
      <input type="checkbox" className="mt-1" required />
      <label htmlFor="checkbox" className="text-sm text-gray-600">
        By continuing, I agree to the terms of use & privacy policy.
      </label>
    </div>
  )
}

export default TermsOfUse;