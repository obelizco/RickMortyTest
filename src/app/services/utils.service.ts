import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '../Characters/interfaces/location';
import { LocationComponent } from '../Characters/views/location/location.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private _snackBar: MatSnackBar,
              public dialog: MatDialog,) { }

  openToast(message:string,action:string){
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }


  showModalLocation(location:Location){
    const dialogConfig = new MatDialogConfig();
    const dataModal: Location = location;
    dialogConfig.data = dataModal;
    this.dialog.open(LocationComponent, dialogConfig);
    
}

  
}
