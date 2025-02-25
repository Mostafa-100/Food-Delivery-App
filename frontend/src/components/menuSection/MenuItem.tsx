import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDishes, setIsDishesExists } from "../../redux/dish";

type MenuItemsProps = {
  id: number;
  imgUrl: string;
  itemName: string;
};

function MenuItem({ id, imgUrl, itemName }: MenuItemsProps) {
  const { initialDishes } = useSelector((state: RootState) => state.dish);

  const dispatch = useDispatch();

  function onClickHandler(e: React.MouseEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement;
    const previousClickedElements =
      document.querySelectorAll(".menu-img-clicked");

    previousClickedElements.forEach((item) => {
      item.classList.remove(
        "menu-img-clicked",
        "border-4",
        "border-red-500",
        "p-0.5"
      );
    });

    const isAlreadyExist = Array.from(previousClickedElements).some((item) => {
      return item.isEqualNode(target);
    });

    if (isAlreadyExist) {
      dispatch(setIsDishesExists(true));
      dispatch(setDishes(initialDishes));
      return;
    }

    const newDishes = initialDishes.filter((dish) => dish.category_id == id);

    target.classList.add(
      "menu-img-clicked",
      "border-4",
      "border-red-500",
      "p-0.5"
    );

    if (newDishes.length === 0) {
      dispatch(setIsDishesExists(false));
      return;
    }

    dispatch(setIsDishesExists(true));

    dispatch(setDishes(newDishes));
  }

  return (
    <div className="cursor-pointer" onClick={onClickHandler}>
      <img
        src={imgUrl}
        className="transition-all duration-75 size-24 object-cover rounded-full"
      />
      <div className="text-sm text-center text-slate-500">{itemName}</div>
    </div>
  );
}

export default MenuItem;
