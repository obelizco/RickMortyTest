import { Injectable } from '@angular/core';
import { Character } from '../Characters/interfaces/character';
import { LocalStorageService } from 'ngx-localstorage';
import { UtilsService } from './utils.service';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  characters: Character[] = [];
  characters$: BehaviorSubject<Character[]>;

  getCharacter(): Observable<Character[]> {
    return this.characters$.asObservable();
  }

  setCharacter() {
    const characters = this._localstorage.get('charactersFavorite')
    this.characters$.next(characters);
  }

  constructor(private _localstorage: LocalStorageService,
    private _utils: UtilsService,
  ) { 
    this.characters$ = new BehaviorSubject<Character[]>(this._localstorage.get('charactersFavorite'));
  }


  favoriteCharacters(character: Character): void {
    let mensaje = '';
    const duplicado = this.characters.find(x => x.id === character.id)
    if (duplicado) {
      this.characters = this.characters.filter(x => x.id !== character.id);
      mensaje = 'Removido de favorito';
    } else {
      this.characters.push(character);
      mensaje = 'Agregado a favorito';
    }
    this._utils.openToast(mensaje, 'Cerrar');
    this._localstorage.set('charactersFavorite', this.characters);
    this.setCharacter()
    
  }

  chargeFavorite() {
    const characters = this._localstorage.get('charactersFavorite');
    this.characters = characters || [];
    return this.characters;
  }

  isFavorite(id: number) {
    this.chargeFavorite();
    const isFav = this.characters.find(x => x.id === id);
    return isFav ? true : false;
  }


}
