import AddToCartAuthErrorDisplay from "./AddToCartAuthErrorDisplay";
import DishPrice from "./DishPrice";
import StarsContainer from "./StarsContainer";

type DishInfoProps = {
  name: string;
  numberOfStars: number;
  snippet: string;
  price: number;
  showError: boolean;
}

function DishInfo({ name, numberOfStars, snippet, price, showError }: DishInfoProps) {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h3 className="text-xl text-slate-900 font-medium">{name}</h3>
        <StarsContainer numberOfStars={numberOfStars} />
      </div>
      <div className="text-sm text-slate-500">{snippet}</div>
      <DishPrice price={price} />
      <AddToCartAuthErrorDisplay show={showError} />
    </div>
  )
}

export default DishInfo;