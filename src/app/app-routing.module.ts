
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'characters',
      pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () => import('./Characters/character.module').then(m => m.CharacterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
