import { TInternationalization, Setup } from "../../../settings/setup";
import { IInternationalizationAction } from "../../actions/InternationalizationAction";
import { EACTIONS } from "../../reduxEnum";


export function reducer(state: TInternationalization, action: IInternationalizationAction): TInternationalization {
    switch (action.type) {
        case EACTIONS.CHANGE_APP_FLAG:
            return action.payload;
    }
    if (state) { return state; }
    return Setup.internationalization;
}