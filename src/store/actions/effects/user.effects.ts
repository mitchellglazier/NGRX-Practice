import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { EUserActions, GetUserSuccess, GetUsersSuccess, GetUser,GetUsers } from '../e-user-actions.enum';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../../state/i-app-state';

@Injectable() export class UserEffects {
    @Effect() getUser$ = this._actions$.pipe(ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
        const selectUser = users.filter(user => user.id === +id)[0];
        return of(new GetUserSuccess(selectedUser));
    })
    );

    @Effect() getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
        );

    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}
}