import { header, request } from "./_request";


export const getResult = async (id: number) => {

  try {
    const res = await request.post(`/viewResult/${id}`,header);
    console.log(res);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
