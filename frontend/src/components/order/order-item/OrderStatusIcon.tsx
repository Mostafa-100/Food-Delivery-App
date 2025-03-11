import { getStatucColor } from "../../../libs/utils";

function OrderStatusIcon({ status }: { status: string }) {
  const statusColor = getStatucColor(status);
  return (
    <span
      className={`inline-block mr-1 size-3 rounded-full ${statusColor}`}
    ></span>
  )
}

export default OrderStatusIcon;