import { IConfigState, initialConfigState } from './../state/i-config-state';
import { ConfigActions, EConfigActions } from '../actions/e-config-actions.enum';

export const configReducers = (
    state = initialConfigState,
    action: ConfigActions
): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            };
        }

        default:
            return state;
    }
};
