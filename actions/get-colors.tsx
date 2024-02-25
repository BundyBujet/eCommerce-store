import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const responce = await fetch(URL);
  return responce.json();
};
export default getColors;
