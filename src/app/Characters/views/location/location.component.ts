import { Component, Inject } from '@angular/core';
import { Location } from '../../interfaces/location';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public location: Location,
    ) { }

}
