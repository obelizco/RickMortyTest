import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ApiRickMortyResponse, Character } from '../Characters/interfaces/character';
import { Episodes } from '../Characters/interfaces/episodes';
import { Location } from '../Characters/interfaces/location';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseApiUrl: string = environment.APi;

  constructor(private _http:HttpClient) { }


  
  getCharacters(page:number):Observable<ApiRickMortyResponse>{
    const endpoint = `${this.baseApiUrl}/character/?page=${page}`;
    return this._http.get<ApiRickMortyResponse>(endpoint);
  }

  getCharacterById(id:string):Observable<Character>{
    const endpoint = `${this.baseApiUrl}/character/${id}`;
    return this._http.get<Character>(endpoint)
  }

  getCharacterByName(name:string) :Observable<ApiRickMortyResponse>{
    const endpoint = `${this.baseApiUrl}/character/?name=${name}`;
    return this._http.get<ApiRickMortyResponse>(endpoint)
  }

  getLocation(id:string):Observable<Location>{
    const endpoint = `${this.baseApiUrl}/location/${id}`;
    return this._http.get<Location>(endpoint);
  }

  getEpisodes(episodes:string[]):Observable<Episodes[]>{
    const endpoint = `${this.baseApiUrl}/episode/${episodes.join(',')}`;
    return this._http.get<Episodes[]>(endpoint);
  }


}
