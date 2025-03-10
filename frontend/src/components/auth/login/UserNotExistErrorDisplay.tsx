function UserNotExistErrorDisplay({ message }: { message: string }) {
  return (
    <div className="text-sm text-center text-red-500">{message}</div>
  )
}

export default UserNotExistErrorDisplay;