import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import apiClient from "../api/apiClient";
import { useQuery } from "react-query";

function useGetOrders() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sessionCheckoutId = useRef("");

  useEffect(() => {
    sessionCheckoutId.current = searchParams.get("checkout_session_id") ?? "";
    if (!sessionCheckoutId.current) return;
    searchParams.delete("checkout_session_id");
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const { data: orders, isLoading } = useQuery(
    ["getOrders"],
    async function () {
      const response = await apiClient.get(
        `/api/orders${sessionCheckoutId.current && '?checkout_session_id=' + sessionCheckoutId.current}`
        , {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        });
      return response.data;
    }
  );

  return { orders, isLoading };
}

export default useGetOrders;