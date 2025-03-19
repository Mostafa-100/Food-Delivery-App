import { useLocation } from "react-router-dom";

function useGetCartTotalState() {
  const { state } = useLocation();

  const total = state?.total;

  return total;
}

export default useGetCartTotalState;