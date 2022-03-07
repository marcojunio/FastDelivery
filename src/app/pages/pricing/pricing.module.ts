import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PricingComponent } from '@pages/pricing/pricing.component';

const ROUTE: Routes = [
    { path: '', component: PricingComponent }
]

@NgModule({
    declarations: [
        PricingComponent
    ],
    imports: [
        RouterModule.forChild(ROUTE)
    ]
})

export class PricingModule {

}