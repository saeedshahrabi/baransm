import { IAuthenticationAction } from "../../actions/authentication/authenticationAction";
import { EACTIONS } from "../../reduxEnum";


export function reducer(state: string | null, action: IAuthenticationAction): string | null {
    switch (action.type) {
        case EACTIONS.SET_AUTHENTICATION:
            return action.payload;
        case EACTIONS.REMOVE_AUTHENTICATION:
            return action.payload;
    }
    if (state) { return state; }
    return null;
}