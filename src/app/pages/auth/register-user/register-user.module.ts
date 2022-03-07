import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { RegisterUserComponent } from './register-user.component';

const ROUTES: Routes = [
    {
        path: "",
        component: RegisterUserComponent
    }
]

@NgModule({
    declarations: [
        RegisterUserComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        CommonModule
    ]
})

export class RegisterUserModule { }