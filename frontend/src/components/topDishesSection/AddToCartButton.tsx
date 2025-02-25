import { Plus } from "lucide-react";

type AddToCartButtonProps = {
  onClick: () => void;
};

function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      className=" bg-white hover:bg-neutral-300 transition-colors p-3 rounded-full"
      onClick={onClick}
    >
      <Plus className="size-4" />
    </button>
  );
}

export default AddToCartButton;
