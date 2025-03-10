import useMakeDishStars from "../../hooks/useMakeDishStars";

type StarsProps = {
  numberOfStars: number;
};

function Stars({ numberOfStars }: StarsProps) {
  const stars = useMakeDishStars(numberOfStars);
  return <div className="flex gap-px">{stars}</div>;
}

export default Stars;
