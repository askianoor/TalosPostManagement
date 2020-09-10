import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPostComponent } from './add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    FontAwesomeModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddPostModule { }
