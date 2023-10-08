import { ApiResponse } from "~/models/ApiResponse";
import { loginDTo } from "~/models/auth/loginResultDTo";
import { RegisterDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/customApiFetch";

export function RegisterUser(
  command: RegisterDTo
): Promise<ApiResponse<undefined>> {
  return FetchApi("/auth/register", {
    method: "post",
    body: command,
  });
}

export function Login(
  phoneNumber: string,
  password: string
): Promise<ApiResponse<loginDTo>> {
  return FetchApi("/auth/login", {
    method: "post",
    body: {
      phoneNumber,
      password,
    },
  });
}
