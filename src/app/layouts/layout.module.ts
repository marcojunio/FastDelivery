import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "@layout/footer/footer.component";
import { LayoutComponent } from '@layout/layout/layout.component';
import { NavComponent } from '@layout/nav/nav.component';
import { LayoutMainComponent } from '@layout/layout-main/layout-main.component';
import { HeaderComponent } from '@layout/header/header.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        FooterComponent,
        LayoutComponent,
        NavComponent,
        LayoutMainComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})

export class AppLayoutModule {

}