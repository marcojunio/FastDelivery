import type { Routes } from "@angular/router";

import { LayoutComponent } from '@layout/layout/layout.component';
import { LayoutMainComponent } from '@layout/layout-main/layout-main.component';
import { HomeComponent } from "@pages/home/home.component";
import { AppGuard } from "@settings/app-guard";

export const ROUTES: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: 'feature', loadChildren: () => import('@pages/features/features.module').then((module) => module.FeatureModule) },
            { path: 'pricing', loadChildren: () => import('@pages/pricing/pricing.module').then((module) => module.PricingModule) },
            { path: "login", loadChildren: () => import("@pages/auth/login/login.module").then((module) => module.LoginModule) },
            { path: "register-user", loadChildren: () => import("@pages/auth/register-user/register-user.module").then((module) => module.RegisterUserModule) }
        ],
    },
    {
        path: "main",
        canActivate: [AppGuard],
        component: LayoutMainComponent,
        children: [

        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
];