import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './_Pages/main-page/main-page.component';
import { AddPostComponent } from './_Pages/add-post/add-post.component';
import { ViewPostComponent } from './_Pages/view-post/view-post.component';

const routes: Routes = [
  {
    path: 'Main',
    component: MainPageComponent,
  },
  {
    path: 'AddPost',
    component: AddPostComponent,
  },
  {
    path: 'ViewPost',
    component: ViewPostComponent,
  },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
  { path: '**', redirectTo: '/Main' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
