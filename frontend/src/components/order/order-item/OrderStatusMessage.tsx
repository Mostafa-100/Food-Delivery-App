function OrderStatusMessage({ status }: { status: string }) {
  return (
    <span className="capitalize">{status}</span>
  )
}

export default OrderStatusMessage;