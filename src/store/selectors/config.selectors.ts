import { IConfigState } from '../state/i-config-state';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/i-app-state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config
);
