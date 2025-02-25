function CartItemRow({ item, func }) {
  return (
    <tr className="border-t border-slate-300 text-center" key={item.id}>
      <td className="p-2 flex justify-center">
        <img
          src={item.imagePath}
          alt={item.name}
          className="size-14 object-cover rounded-full"
        />
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${item.total}</td>
      <td>
        <button
          className="font-bold text-sm inline-block bg-red-500 hover:bg-transparent transition-colors px-2 border-2 border-red-500 rounded-full text-white cursor-pointer hover:text-red-500"
          onClick={() => func(item.id)}
        >
          x
        </button>
      </td>
    </tr>
  );
}

export default CartItemRow;
