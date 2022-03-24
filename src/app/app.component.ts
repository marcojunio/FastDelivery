import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getShowLoader } from '@shared/store/shared.selectors';
import { AppState } from '@store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showLoader: Observable<boolean> = new Observable();

  constructor(public route: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.route.navigate(['home']);
    this.showLoader = this.store.select(getShowLoader);
  }
}
