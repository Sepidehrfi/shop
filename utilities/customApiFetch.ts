import { useAuthStore } from "~/stores/authStore";
import { FetchError, FetchOptions } from "‍ohmyfetch";
import { ApiResponse, AppStatusCode } from "../models/ApiResponse";

export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
  config = {
    baseURL: "http://shop-api.codeyad-project.ir/",
    ...config,
  };
const authStore = useAuthStore()
if(authStore && authStore.islogin){
let loginData = authStore.loginResult
config.headers["Authorizetion"] = loginData?.token
}
  // return $fetch<ApiResponse<T>>(url, config)
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((e: FetchError) => {
  //     return {
  //       data: null,
  //       isSuccess: false,
  //       metaData: {
  //         appStatusCode: e.response?._data?.metaData ?? AppStatusCode.ServerErroe
  //         message:
  //           e.response?._data?.metaData?.Message ?? "مشکلی در عملیات رخ داده ",
  //       },
  //     };
  //   });
}
