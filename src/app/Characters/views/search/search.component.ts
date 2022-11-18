import { CharactersService } from 'src/app/services/characters.service';
import { Character } from './../../interfaces/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term:string="";
  existError:boolean = false;
  characters : Character[]=[];
  charactersuggestion: Character[] = [];
  showsuggestion :boolean = false;
  constructor(private _characterService:CharactersService) { }

  ngOnInit(): void {
  }

  search(term:string):void{
    this.term = term;
    this.existError = false;
    this.showsuggestion = false;
    this._characterService.getCharacterByName(this.term).subscribe(({results})=>{
      this.characters = results;
    }, error =>{
      this.existError = true;
      this.characters = [];
    });
  }


  suggestion(term:string){
    this.existError = false;
    this.showsuggestion = true;
    this.term = term;
    this._characterService.getCharacterByName(term).subscribe(({results})=>{
      this.charactersuggestion = results.splice(0,5);
      
    },(err)=>this.charactersuggestion= [])

  }

  searchSuggestion(termino:string){
    this.search(termino);

  }

}
