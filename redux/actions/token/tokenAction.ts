import { Action } from "redux";
import { EACTIONS } from "../../reduxEnum";
import { IToken } from "../../../models/model.token";

export interface ITokenAction extends Action<EACTIONS> {
    payload: IToken| null;
}