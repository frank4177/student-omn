import { header, request } from "./_request";
import useSWRMutation from "swr/mutation";


export const getResult = async (id: number) => {

  try {
    const res = await request.post(`/viewResult/${id}`,header);
    console.log(res);
    return res?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
