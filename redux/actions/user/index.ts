import { UserAction } from "./UserAction";
import { EACTIONS } from "../../reduxEnum";
import { IUser } from "../../../models/user.model";


export function action_user_logged_in(user: IUser): UserAction {
    return {
        type: EACTIONS.LOGGED_IN,
        payload: user
    }
}

export function action_user_logged_out(): UserAction {
    return {
        type: EACTIONS.LOGGED_OUT,
        payload: null
    }
}