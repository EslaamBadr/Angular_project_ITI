import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(private readonly myClient:HttpClient) { }

  private readonly base_URL = "http://jsonplaceholder.typicode.com/users";
  private readonly Albums_URL = "https://jsonplaceholder.typicode.com/albums";
  private readonly Photos_URL = "https://jsonplaceholder.typicode.com/photos";
  //private readonly base_URL = "http://localhost:3000/users";

  GetAllUsers(){
    return this.myClient.get(this.base_URL);
  }

  GetUserById(id:any){
    return this.myClient.get(this.base_URL+"/"+id);
  }

  AddUser(newUser:any){
    return this.myClient.post(this.base_URL, newUser);
    
  }

  GetAllAlbums(){
    return this.myClient.get(this.Albums_URL);
  }

  GetAlbumById(id:any){
    return this.myClient.get(this.Albums_URL+"/"+id);
  }

  GetAllPhotos(){
    return this.myClient.get(this.Photos_URL);
  }

  // Delete(id:any){
  //   return this.myClient.delete(this.base_URL+"/"+id);
  // }

}
