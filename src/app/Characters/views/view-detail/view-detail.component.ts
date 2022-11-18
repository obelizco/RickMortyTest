import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from './../../../services/characters.service';
import { Character } from '../../interfaces/character';
import { switchMap } from 'rxjs/operators';
import { UtilsService } from 'src/app/services/utils.service';
import { Episodes } from '../../interfaces/episodes';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  character!: Character;
  episodes:Episodes[]=[];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private _characterService:CharactersService,
              private _utils: UtilsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this._characterService.getCharacterById(id))
      )
      .subscribe( character => {
        this.character = character
        this.getEpispodes();
      });

  }

  
  getLocationId(url:string){
    const id = url.substring(url.length-1);
    this._characterService.getLocation(id)
    .subscribe(location => this._utils.showModalLocation(location) );
  }

  backTo() {
    this.router.navigate(['/characters/viewAll']);
  }

  getEpispodes():void{
    const {episode} = this.character;
    const episodes = episode.map((x)=>{
      return x.replace("https://rickandmortyapi.com/api/episode/","");
    })
    this._characterService.getEpisodes(episodes).subscribe((res)=>{
      this.episodes = res;
    }, error => this.episodes = [])
  }

}
