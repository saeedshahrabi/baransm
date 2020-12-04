import { TInternationalization } from "../../../settings/setup";
import { IInternationalizationAction } from "../InternationalizationAction";
import { EACTIONS } from "../../reduxEnum";


export function action_change_app_flag(internationalization: TInternationalization): IInternationalizationAction {
    return {
        type: EACTIONS.CHANGE_APP_FLAG,
        payload: internationalization
    }
}
