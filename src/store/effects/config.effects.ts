import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EConfigActions, GetConfigSuccess, GetConfig } from '../actions/e-config-actions.enum';
import { IConfig } from 'src/store/state/i-config';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

    constructor(
        private _configService: ConfigService,
        private _actions$: Actions) {}
}