import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Noencontrada404Component } from './components/noencontrada404/noencontrada404.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { RegistroComponent} from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },

  { path: "loguin", 
  component: LoguinComponent
  },

  { path: "registro",
   component: RegistroComponent
  },

  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: '**', 
    component: Noencontrada404Component,
    
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
