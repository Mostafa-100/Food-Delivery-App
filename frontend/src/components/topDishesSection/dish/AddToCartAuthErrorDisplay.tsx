type AddToCartAuthErrorDisplayProps = {
  show: boolean;
}

function AddToCartAuthErrorDisplay({ show }: AddToCartAuthErrorDisplayProps) {
  return (
    <div className={`${show ? "block" : "hidden"} text-center text-red-500`}>
      You must login first
    </div>
  )
}

export default AddToCartAuthErrorDisplay;