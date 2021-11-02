import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';


// Services
import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';
import { Noencontrada404Component } from './components/noencontrada404/noencontrada404.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PostComponent } from './components/post/post.component';
import { FiltrosPipe } from './pipes/filtros.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    Noencontrada404Component,
    LoguinComponent,
    RegistroComponent,
    PostComponent,
    FiltrosPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    

   
    
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
