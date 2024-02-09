import useSWR from "swr";
import { header, request } from "./_request";
import useSWRMutation from "swr/mutation";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import toast from 'react-hot-toast';
import { FilterTypeArg } from "../../types";

// Filter Students endpoints
export const ALL_LEVELS = "/viewAllLevels";
export const ALL_AGES = "/viewAllAges";
export const ALL_GENDER = "/viewAllGender";
export const ALL_STATES = "/viewAllStates";


// Fetch filter data 
export const useFetchFilterData = (param: string) => {
  const fetcher = async (url: string) => {
    try {
      const res = await request.get(url, header);
      return res?.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching all filters", {
        position: "top-center",
      });
      throw error;
    }
  };
  const { data, isValidating, mutate } = useSWR(param, fetcher, {
    shouldRetryOnError: false
  });

  return { mutate, data, isValidating };
};


// Post selected filter data
export const useFilterStudents = () => {
  const { dispatch } = useContext(GlobalContext);
  const postData = async (urlparam: string, { arg }: FilterTypeArg) => {
    dispatch({
        type: "IS_FETCHING",
        payload: true
    })
    try {
      const res = await request.post(urlparam, arg, header);
      dispatch({
        type: "FETCH_STUDENTS",
        payload: res?.data?.data?.students,
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
        toast.error("Something went wrong", {
          position: "top-center",
        });
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const { trigger, data, isMutating } = useSWRMutation(`/filterData`, postData);

  return { trigger, data, isMutating };
};
