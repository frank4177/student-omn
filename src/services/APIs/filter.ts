import useSWR from "swr";
import { header, request } from "./_request";
import useSWRMutation from "swr/mutation";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

// Filter Students endpoints
export const ALL_LEVELS = "/viewAllLevels";
export const ALL_AGES = "/viewAllAges";
export const ALL_GENDER = "/viewAllGender";
export const ALL_STATES = "/viewAllStates";

export const useFetchStudentData = (param: string) => {
  const fetcher = async (url: string) => {
    try {
      const res = await request.get(url, header);
      return res?.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const { data, isValidating, mutate } = useSWR(param, fetcher);

  return { mutate, data, isValidating };
};


// POST
export const useFilterStudents = () => {
  const { dispatch } = useContext(GlobalContext);
  const postData = async (urlparam: string, { arg }: any) => {
    dispatch({
        type: "IS_FETCHING",
        payload: true
    })
    console.log(arg);
    try {
      const res = await request.post(urlparam, arg, header);
      console.log(res);
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
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const { trigger, data, isMutating } = useSWRMutation(`/filterData`, postData);

  return { trigger, data, isMutating };
};
