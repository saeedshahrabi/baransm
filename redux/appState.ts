import { TInternationalization } from "../settings/setup";
import { IToken } from "../models/model.token";
import { IUser } from "../models/model.user";
import { ITheme_schema } from "./actions/theme/themeAction";
import { TAuthentication_schema } from "./actions/authentication/authenticationAction";


export interface redux_state {
  logged_in_user: IUser | null;
  internationalization: TInternationalization;
  token: IToken | null;
  theme: ITheme_schema;
  authentication: TAuthentication_schema;

}
