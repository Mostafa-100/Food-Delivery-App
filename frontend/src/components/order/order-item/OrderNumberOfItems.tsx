function OrderNumberOfItems({ numberOfItems }: { numberOfItems: number }) {
  return (
    <div className="whitespace-nowrap px-2">Items: {numberOfItems}</div>
  )
}

export default OrderNumberOfItems;