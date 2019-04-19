import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserList } from 'src/store/selectors/user-selectors';
import { Router } from '@angular/router';
import { IAppState } from 'src/store/state/i-app-state';
import { GetUsers } from 'src/store/actions/e-user-actions.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }

}
