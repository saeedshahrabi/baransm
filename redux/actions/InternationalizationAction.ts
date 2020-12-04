import { Action } from "redux";
import { TInternationalization } from "../../settings/setup";
import { EACTIONS } from "../reduxEnum";


export interface IInternationalizationAction extends Action<EACTIONS> {
    payload: TInternationalization;
}