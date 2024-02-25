import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const responce = await fetch(`${URL}/${id}`);
  return responce.json();
};
export default getProduct;
