import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component'

const routes:Routes=[
  {path:'',component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path:'artist/:id',component:ArtistComponent},
  {path:'album/:id',component:AlbumComponent}

]

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule, RouterModule.forRoot(routes) ],
  declarations: [AlbumComponent, ArtistComponent,AppComponent ,NavbarComponent,AboutComponent,SearchComponent],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
