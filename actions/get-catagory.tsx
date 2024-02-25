import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCatagory = async (id: string): Promise<Category> => {
  const responce = await fetch(`${URL}/${id}`);
  return responce.json();
};
export default getCatagory;
