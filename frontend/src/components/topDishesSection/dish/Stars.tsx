import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

type StarsProps = {
  numberOfStars: number;
}

function Stars({ numberOfStars }: StarsProps) {
  const stars = [1, 2, 3, 4, 5].map((number, index) => {
    if (number > numberOfStars) return <CiStar key={index} />;
    return <FaStar className="text-yellow-500" key={index} />;
  });

  return stars;
}

export default Stars;