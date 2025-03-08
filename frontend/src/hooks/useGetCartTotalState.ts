import { useLocation } from "react-router-dom";

function useGetCartTotalState() {
  const { state } = useLocation();

  const { total } = state;

  return total;
}

export default useGetCartTotalState;