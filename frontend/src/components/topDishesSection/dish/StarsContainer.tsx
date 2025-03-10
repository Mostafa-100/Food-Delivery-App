import Stars from "./Stars";

type StarsContainerProps = {
  numberOfStars: number;
}

function StarsContainer({ numberOfStars }: StarsContainerProps) {
  return (
    <div className="flex gap-px">
      <Stars numberOfStars={numberOfStars} />
    </div>
  );
}

export default StarsContainer;
