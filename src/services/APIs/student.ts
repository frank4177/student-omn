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
    try {
      const res = await request.get(url, header);
      console.log(res);
      dispatch({
        type: "FETCH_STUDENTS",
        payload: res?.data.data?.students,
      });
      return res?.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const { data, isValidating, mutate } = useSWR(url, fetcher);

  return { mutate, data, isValidating };
};


