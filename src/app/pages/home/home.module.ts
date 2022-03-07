import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@pages/home/home.component";


const ROUTE: Routes = [
    {
        path: "",
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        RouterModule.forChild(ROUTE)
    ]
})

export class HomeModule {

}