import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/Services/user.service';
import { config } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component'; 
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {

  ID:any;
  users:any;
  constructor(public myService:UserServices, public myRouter:Router, public myRoute:ActivatedRoute, private dialog: MatDialog) {
   
    this.ID=myRoute.snapshot.params["id"];
    console.log(this.ID)

    myService.GetAllUsers().subscribe(
    {
      next:(data) =>{this.users=data}
    })


  }
  openPopup() {
    this.dialog.open(AddUserComponent, {
      data: {
        title: 'Popup Title',
       message: 'Popup message'
      }
    });
  }

  openUpdatePopup(){
    //console.log(ID)
    this.dialog.open(UpdateUserComponent, {
      data:{
        title: 'Popup Title',
       message: 'Popup message'
      }
    });   
  }


   delete(ID:any){
    
    console.log(ID);
    
    const table = document.getElementById("user-table") as HTMLTableElement;
        
    for (let i = 0; i < table.rows.length; i++) {
      const cell = table.rows[i].cells[0];
      const cellText = cell.textContent || cell.innerText;
    
      if (cellText == ID) {
        table.deleteRow(i);
        break;
      }
    }
  }

}
