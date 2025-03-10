import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function useMakeDishStars(numOfStars: number) {
  const stars = [1, 2, 3, 4, 5].map((number, index) => {
    if (number > numOfStars) return <CiStar key={index} />;
    return <FaStar className="text-yellow-500" key={index} />;
  });
  return stars;
}

export default useMakeDishStars;