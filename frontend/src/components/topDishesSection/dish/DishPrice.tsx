function DishPrice({ price }: { price: number }) {
  return (
    <div className="text-orange-500 text-2xl font-medium">
      ${price}
    </div>
  )
}

export default DishPrice;