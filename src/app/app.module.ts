import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { AlbumDetailsComponent } from './Components/album-details/album-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';

let routes:Routes = [
  {path:'', component:UsersComponent},
  {path:'users', component:UsersComponent},
  {path:'user/:id', component:UserDetailsComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'update-user/:id', component:UpdateUserComponent},
  {path:'user-albums/:id', component:AlbumsComponent},
  {path:'user-album-details/:id', component:AlbumDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    AddUserComponent,
    UpdateUserComponent,
    AlbumsComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
