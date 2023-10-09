export interface ApiResponse<TData> {
  isSuccess: boolean;
  data: TData;
  metaData: MetaData;
}
export interface MetaData {
  message: String;
  appStatusCode: AppStatusCode;
}

export enum AppStatusCode {
  Success = 1,
  NotFound = 2,
  BadRequest = 3,
  LoginError = 4,
  UnAuthorize = 5,
  ServerError ,
}
