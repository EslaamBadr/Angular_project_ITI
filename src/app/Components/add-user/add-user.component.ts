import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServices } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})

export class AddUserComponent {

  emailReg = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
  phoneReg = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";

  constructor(public myServic: UserServices, public myRouter: Router,
    private dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) { }
  close() {
    this.dialogRef.close();
  }

  add(name: any, id: any, email: any, phone: any, city: any, street: any, suite: any) {
    if (name && phone.match(this.phoneReg) && email.match(this.emailReg) && city && street && suite) {

      const table = document.getElementById('user-table') as HTMLTableElement;
      const row = table.insertRow();
      const idCell = row.insertCell();
      idCell.textContent = id;
      const nameCell = row.insertCell();
      nameCell.textContent = name;
      const emailCell = row.insertCell();
      emailCell.textContent = email;
      const phoneCell = row.insertCell();
      phoneCell.textContent = phone;

      const cityCell = city;
      const streetCell = street;
      const suiteCell = suite;

      const addressCell = row.insertCell();
      addressCell.textContent = suiteCell + ' ' + streetCell + ', ' + cityCell;

      const infoCell = row.insertCell();
      infoCell.innerHTML = "<button type='button' class='btn btn-primary' routerLink='/user/{{u.id}}'>Info</button>";
      const updateCell = row.insertCell();
      updateCell.innerHTML = "<button type='button' class='btn btn-success'>Update</button>";
      const deleteCell = row.insertCell();
      deleteCell.innerHTML = "<button type='button' class='btn btn-danger' (click)='delete(u.id)'>Delete</button>";


      row.classList.add('table-light');
      deleteCell.addEventListener('click', () => {
        const table = document.getElementById("user-table") as HTMLTableElement;

        for (let i = 0; i < table.rows.length; i++) {
          const cell = table.rows[i].cells[0];
          const cellText = cell.textContent || cell.innerText;
          if (cellText == id) {
            table.deleteRow(i);
            break;
          }
        }
      });


      this.close();
    } 
    else {
      alert("Please insert a valid data!!");
    }
  }

}
