import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppLayoutModule } from '@layout/layout.module';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '@settings/app-http-interceptor';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '@store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@pages/auth/store/auth.effects';
import { environment } from '@environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    [!environment.production ? StoreDevtoolsModule.instrument({ maxAge: 20 }) : []]
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
