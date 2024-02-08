import { header, request } from "./_request";


export const getResult = async (id: number) => {
  try {
    const res = await request.post(`/viewResult/${id}`,header);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
