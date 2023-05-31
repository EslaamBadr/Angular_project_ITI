import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from 'src/app/Services/user.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styles: [
  ]
})
export class AlbumDetailsComponent {
  ID; 
  user:any;
  album:any;
  photos:any;

  
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

    this.myServic.GetAlbumById(this.ID).subscribe(
      {
        next: (data)=>{this.album=data;},
        error: (err)=>{console.log(err)},
        complete: ()=>{console.log("Success")}
      }
    )

    this.myServic.GetAllPhotos().subscribe(
      {
        next: (data)=>{this.photos=data;},
        error: (err)=>{console.log(err)},
        complete: ()=>{console.log("Success")}
      }
    )
  }
}
