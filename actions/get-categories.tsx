import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCateogries = async (): Promise<Category[]> => {
  const responce = await fetch(URL);
  return responce.json();
};
export default getCateogries;
