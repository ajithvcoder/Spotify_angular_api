import { Component } from '@angular/core';
import{SearchComponent} from './components/search/search.component';
import{AboutComponent} from './components/about/about.component';
import {SpotifyService} from './services/spotify.service'
import{AlbumComponent} from './components/album/album.component';
import{ArtistComponent} from './components/artist/artist.component';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  entryComponents:[SearchComponent,AboutComponent],
  providers:[SpotifyService]


})

export class AppComponent { }