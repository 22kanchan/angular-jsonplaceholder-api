import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AuthGuard } from './_helpers/auth.gaurd';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },

   {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  
  {
  path: 'register',
  component:RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-details/:id',
    component: UsersDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
