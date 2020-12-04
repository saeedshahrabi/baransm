import { BaseModel } from "./baseModel";

export interface IUser extends BaseModel {
  first_name: string;
  last_name: string;
  mobile: string;
  address: string;
  email: string;
}