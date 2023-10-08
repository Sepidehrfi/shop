export interface UserDTo {
  id: number;
  creationDate: Date;
  name: string;
  family: string;
  phoneNumber: string;
  email: string;
  password: string;
  avatarName: string;
  isActive: true;
  gender: Gender;
  Roles: [];
}
export enum Gender {}
//    نامشخص  =  ,
//    خانم = ,
//    آقا = ,

export interface Role {
  roleId: number;
  roleTitle: string;
}
