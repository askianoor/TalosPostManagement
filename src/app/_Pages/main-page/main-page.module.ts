import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    FontAwesomeModule
  ]
})
export class MainPageModule { }
