import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login.component';

const ROUTES: Routes = [
    {
        path: "",
        component: LoginComponent
    }
]

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        CommonModule
    ]
})

export class LoginModule { }