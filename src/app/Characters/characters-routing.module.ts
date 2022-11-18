import { SearchComponent } from './views/search/search.component';
import { FavoritesComponent } from './views/favorites/favorites.component';

import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AllCharactersComponent } from './views/all-characters/all-characters.component';
import { ViewDetailComponent } from './views/view-detail/view-detail.component';

const rutas: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'viewAll', component: AllCharactersComponent },
      { path: 'favorite', component: FavoritesComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: ViewDetailComponent },
      { path: '**', redirectTo: 'viewAll' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ], exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
