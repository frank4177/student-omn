import useSWR from "swr";
import { header, request } from "./_request";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

// Fetch request
export const ALL_DATA = "/viewAllData";


// STUDENT GET REQUEST
export const useFetchStudentData = (url: string) => {
  const { dispatch } = useContext(GlobalContext);

  const fetcher = async (url: string) => {
    dispatch({
      type: "IS_FETCHING",
      payload: true
  })
    try {
      const res = await request.get(url, header);
      console.log(res);
      dispatch({
        type: "FETCH_STUDENTS",
        payload: res?.data.data?.students,
      });
      dispatch({
        type: "IS_FETCHING",
        payload: false
    })
      return res?.data;
    } catch (error) {
      dispatch({
        type: "IS_FETCHING",
        payload: false
    })
      console.error("Error fetching data:", error);
      // alert("Error fetching data")
      throw error;
    }
  };

  const { data, isValidating, mutate } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return { mutate, data, isValidating };
};


