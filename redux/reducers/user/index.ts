import { EACTIONS } from "../../reduxEnum";
import { UserAction } from "../../actions/user/UserAction";
import { IUser } from "../../../models/user.model";


export function reducer(state: IUser | null | undefined, action: UserAction): IUser | null {
    switch (action.type) {
        case EACTIONS.LOGGED_IN:
            return action.payload;
        case EACTIONS.LOGGED_OUT:
            return action.payload;
    }
    if (state) { return state; }
    return null;
}