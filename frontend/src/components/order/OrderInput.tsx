type OrderInputProps = {
  type?: string;
  name: string;
  placeholder: string;
  className?: string;
};

function OrderInput(props: OrderInputProps) {
  return (
    <input
      type={props.type ?? "text"}
      name={props.name}
      placeholder={props.placeholder}
      className={`border border-neutral-200 py-1.5 px-2 rounded-md grow ${
        props.className && props.className
      }`}
      required
    />
  );
}

export default OrderInput;
