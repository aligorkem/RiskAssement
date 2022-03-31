import { api } from "./api";
export const postData = (queryName: string, formData: string) => {
   return api().post(`/${queryName}`, formData );
}