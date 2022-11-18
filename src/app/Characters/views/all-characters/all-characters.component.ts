
import { CharactersService } from './../../../services/characters.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {
  private numPage = 1;
  characters : Character[] = [];
  constructor(@Inject(DOCUMENT) private document: Document,
  private _characterService:CharactersService) { }
  
  ngOnInit(): void {
    this.nextCharacters(1);
  }
  
  nextCharacters(page?:number):void{
    this.numPage++;
    if(page) this.numPage = page; 
    this._characterService.getCharacters(this.numPage)
    .subscribe(({results})=> this.characters.push(...results),error => this.characters = []);
  }


}
