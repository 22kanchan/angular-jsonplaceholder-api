// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';

// Component
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

// Services 
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { RegisterComponent } from './register/register.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    LoginComponent,
    UsersDetailsComponent,
    HeaderComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    RegisterComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
