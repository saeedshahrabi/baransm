import { IThemeAction, ITheme_schema } from "../../actions/theme/themeAction";
import { EACTIONS } from "../../reduxEnum";


function get_reset_theme(): ITheme_schema {
    return {
        sidebar: 'default',
        isSidebarHide: false
    }
}

export function reducer(state: ITheme_schema, action: IThemeAction): ITheme_schema | null {
    switch (action.type) {
        case EACTIONS.UPDATE_THEME:
            return action.payload;
        case EACTIONS.RESET_THEME:
            return get_reset_theme();
    }
    if (state) { return state; }
    return get_reset_theme();
}