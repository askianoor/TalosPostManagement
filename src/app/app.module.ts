import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// Pages Modules
import { MainPageModule } from './_Pages/main-page/main-page.module';
import { ViewPostModule } from './_Pages/view-post/view-post.module';
import { AddPostModule } from './_Pages/add-post/add-post.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainPageModule,
    ViewPostModule,
    AddPostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
