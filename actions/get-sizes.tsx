import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const responce = await fetch(URL);
  return responce.json();
};
export default getSizes;
