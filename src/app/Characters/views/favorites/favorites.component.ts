import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/services/persistence.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  characters: Character[]=[];
  constructor(private  _persistence:PersistenceService) { }

  
  ngOnInit(): void {
    this._persistence.getCharacter().subscribe(res => {
      this.characters = res
    });
  }

}
