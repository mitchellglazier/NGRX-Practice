import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './reducers/user-reducers';
import { configReducers } from './reducers/config-reducers';
import { IAppState } from './state/i-app-state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};
