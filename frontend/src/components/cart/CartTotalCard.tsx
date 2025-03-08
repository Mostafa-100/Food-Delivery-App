function CartTotalCard({ total }: { total: string }) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-neutral-500 font-semibold">Total</span>
      <span className="text-neutral-500">${total}</span>
    </div>
  )
}

export default CartTotalCard;