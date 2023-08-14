import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { AllCharactersComponent } from './views/all-characters/all-characters.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { ViewDetailComponent } from './views/view-detail/view-detail.component';
import { LocationComponent } from './views/location/location.component';
import { UtilsService } from '../services/utils.service';
import { PersistenceService } from '../services/persistence.service';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchComponent } from './views/search/search.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AllCharactersComponent,
    MenuComponent,
    CardCharacterComponent,
    ViewDetailComponent,
    LocationComponent,
    FavoritesComponent,
    SearchComponent,
    SearchbarComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    CharactersRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    UtilsService,
    PersistenceService,

  ]
})
export class CharacterModule { }
