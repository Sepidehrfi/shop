import { ApiResponse } from "~/models/ApiResponse";
import { UserDTo } from "~/models/users/userDTo";
import { FetchApi } from "~/utilities/customApiFetch";

export const GetCurrentUser = (): Promise<ApiResponse<UserDTo>> => {
  return FetchApi("/users/current");
};
