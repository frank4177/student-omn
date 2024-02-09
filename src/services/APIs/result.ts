import { header, request } from "./_request";
import toast from 'react-hot-toast';


export const getResult = async (id: number) => {
  try {
    const res = await request.post(`/viewResult/${id}`,header);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
   
    toast.error("Something went wrong", {
      position: "top-center",
    });
    return error
  }
};
