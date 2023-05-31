import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from 'src/app/Services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent {
  ID; 
  user:any;
  albums:any;

  constructor(myRoute:ActivatedRoute,public myServic:UserServices){
    this.ID=myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.myServic.GetUserById(this.ID).subscribe(
      {
        next: (data)=>{this.user=data;},
        error: (err)=>{console.log(err)},
        complete: ()=>{console.log("Success")}
      }
    )

    this.myServic.GetAllAlbums().subscribe(
      {
        next: (data)=>{this.albums=data;},
        error: (err)=>{console.log(err)},
        complete: ()=>{console.log("Success")}
      }
    )
  }
}
