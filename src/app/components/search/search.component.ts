import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;

    this.spotify.getArtist( termino )
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
  }

}
