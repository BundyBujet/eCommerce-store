import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  const responce = await fetch(`${URL}/${id}`);
  return responce.json();
};
export default getBillboards;
