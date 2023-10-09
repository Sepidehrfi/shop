import { CategoryDto } from "~/models/categoreis/categoryDTo";
import { FetchApi } from "~/utilities/customApiFetch";
import { ApiResponse } from "~~/models/ApiResponse";

export const GetAllCategory = (): Promise<ApiResponse<CategoryDto[]>> => {
  return FetchApi("/category");
};
