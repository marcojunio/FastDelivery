import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '@pages/auth/store/auth.selectors';
import { AppState } from '@store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  userAuthenticated$ = this.store.select(isAuthenticated);

  ngOnInit(): void {
  }

  logout() {

  }
}
