import { Component, OnInit } from '@angular/core';
import { selectConfig } from 'src/store/selectors/config.selectors';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/store/state/i-app-state';
import { GetConfig } from 'src/store/actions/e-config-actions.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(new GetConfig());
  }
}


