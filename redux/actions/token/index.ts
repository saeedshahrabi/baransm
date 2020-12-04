
import { ITokenAction } from "./tokenAction";
import { IToken } from "../../../models/model.token";
import { EACTIONS } from "../../reduxEnum";

export function action_set_token(token: IToken): ITokenAction {
    return {
        type: EACTIONS.SET_TOKEN,
        payload: token
    }
}

export function action_remove_token(): ITokenAction {
    return {
        type: EACTIONS.REMOVE_TOKEN,
        payload: null
    }
}