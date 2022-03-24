import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutUser } from '@pages/auth/store/auth.actions';
import { isAuthenticated } from '@pages/auth/store/auth.selectors';
import { AppState } from '@store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userAuthenticated$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.userAuthenticated$ = this.store.select(isAuthenticated)
  }

  logout() {
    this.store.dispatch(logoutUser());
  }
}
