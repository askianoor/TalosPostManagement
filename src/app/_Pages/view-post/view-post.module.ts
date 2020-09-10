import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ViewPostComponent } from './view-post.component';

@NgModule({
  declarations: [ViewPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    FontAwesomeModule
  ]
})
export class ViewPostModule { }
