import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
    declarations: [
        LoginAdminComponent,
        AdminComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: "rgba(0,0,0,0.1)",
            backdropBorderRadius: "4px",
            primaryColour: "#ffffff",
            secondaryColour: "#ffffff",
            tertiaryColour: "#ffffff",
        }),
        SharedModule
    ]
})
export class AdminModule { }
