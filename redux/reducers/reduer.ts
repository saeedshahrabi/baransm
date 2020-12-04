import { combineReducers, Reducer, AnyAction } from 'redux';
import { ITheme_schema } from '../actions/theme/themeAction';
import { TAuthentication_schema } from '../actions/authentication/authenticationAction';
import { TInternationalization } from '../../settings/setup';
import { IToken } from '../../models/model.token';
import { reducer as TokenReducer } from '../reducers/token';
import { reducer as AuthenticationReducer } from '../reducers/authentication';
import { reducer as ThemeReducer } from '../reducers/theme';
import { reducer as UserReducer } from '../reducers/user';
import { reducer as InternationalizationReducer } from '../reducers/internationalization';
import { IUser } from '../../models/user.model';

export default combineReducers({
  logged_in_user: UserReducer as Reducer<IUser | null, AnyAction>,
  internationalization: InternationalizationReducer as Reducer<TInternationalization, AnyAction>,
  token: TokenReducer as Reducer<IToken | null, AnyAction>,
  authentication: AuthenticationReducer as Reducer<TAuthentication_schema, AnyAction>,
  theme: ThemeReducer as Reducer<ITheme_schema, AnyAction>
});
