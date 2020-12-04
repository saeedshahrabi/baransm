import { BaseModel } from "./baseModel";

export interface ISignUp extends BaseModel {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

export type TSignUpCreate = Omit<ISignUp, keyof BaseModel>;
export type TSignUpUpdate = TSignUpCreate;