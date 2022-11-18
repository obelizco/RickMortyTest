
import { Component, Input } from '@angular/core';
import { PersistenceService } from 'src/app/services/persistence.service';
import { Character } from '../../interfaces/character';


import { CharactersService } from 'src/app/services/characters.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent {

  @Input() character!: Character;
  constructor(private _persistence :PersistenceService,
              private _utils :UtilsService,
              private _characterService:CharactersService) { }

  showLatestEpisode( episodes:string[] ):string{
    return episodes[episodes.length-1];
  } 

  getLocationId(url:string){
    const id = url.substring(url.length-1);
    this._characterService.getLocation(id)
    .subscribe(location => this._utils.showModalLocation(location) );
  }

  savedFavorite(): void {
    this._persistence.favoriteCharacters(this.character);
  }

   showIconFav(id:number):string{
    const isFav = this._persistence.isFavorite(id);
    return isFav? 'favorite': 'favorite_border';
  }

}
