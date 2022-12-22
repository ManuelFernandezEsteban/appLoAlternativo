import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';





@NgModule({
  declarations: [ 
   
  ],
  imports: [
    CommonModule,
    
    HomeRoutingModule,
    
    PagesModule
  ]
})
export class HomeModule { }
