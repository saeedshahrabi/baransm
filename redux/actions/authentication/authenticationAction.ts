import { Action } from "redux";
import { EACTIONS } from "../../reduxEnum";

export type TAuthentication_schema = null | string;

export interface IAuthenticationAction extends Action<EACTIONS> {
    payload: TAuthentication_schema;
}