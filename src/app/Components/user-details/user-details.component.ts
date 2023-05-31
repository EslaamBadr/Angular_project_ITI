import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit{
  ID=0; 
  user:any;
  constructor(myRoute:ActivatedRoute,public myServic:UserServices){
    this.ID=myRoute.snapshot.params["id"];
    console.log(this.ID)
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
  }
}
