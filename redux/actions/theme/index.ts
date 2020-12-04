import { EACTIONS } from "../../reduxEnum";
import { ITheme_schema, IThemeAction } from "./themeAction";

export function action_update_theme(theme: ITheme_schema): IThemeAction {
    return {
        type: EACTIONS.UPDATE_THEME,
        payload: theme
    }
}

export function action_reset_theme(): IThemeAction {
    return {
        type: EACTIONS.RESET_THEME,
        payload: null
    }
}