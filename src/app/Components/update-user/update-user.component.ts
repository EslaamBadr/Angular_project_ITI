import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent {

  emailReg = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
  phoneReg = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";
  ID:any;
  user:any;
  constructor(public myService:UserServices, public myRoute:ActivatedRoute, private dialog: MatDialog
    ,private dialogRef: MatDialogRef<UpdateUserComponent>) {

      this.ID=myRoute.snapshot
      console.log(this.ID)
    // myService.GetUserById(this.ID).subscribe(
    //   {
    //     next: (data) => {this.user=data;},
    //     error: (err) => {console.log();} 

    //   }
    // )
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    
    console.log(this.myRoute.snapshot.params["id"])

  }
}
