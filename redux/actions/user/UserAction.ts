import { Action } from "redux";
import { IUser } from "../../../models/user.model";
import { EACTIONS } from "../../reduxEnum";

export interface UserAction extends Action<EACTIONS> {
    payload: IUser | null;
}