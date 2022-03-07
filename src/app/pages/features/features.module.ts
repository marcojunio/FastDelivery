import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from '@pages/features/features.component';

const ROUTE: Routes = [
    { path: '', component: FeaturesComponent }
]

@NgModule({
    declarations: [
        FeaturesComponent
    ],
    imports: [
        RouterModule.forChild(ROUTE)
    ]
})

export class FeatureModule {

}