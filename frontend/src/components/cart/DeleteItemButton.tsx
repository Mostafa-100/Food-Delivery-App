type DeleteItemButton = {
  func: CallableFunction;
  id: number;
}

function DeleteItemButton({ func, id }: DeleteItemButton) {
  return (
    <button
      className="font-bold text-sm inline-block bg-red-500 hover:bg-transparent transition-colors px-2 border-2 border-red-500 rounded-full text-white cursor-pointer hover:text-red-500"
      onClick={() => func(id)}
    >
      x
    </button>
  )
}

export default DeleteItemButton;