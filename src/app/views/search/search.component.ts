import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CardsComponent } from '../../components/cards/cards.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-search',
  imports: [LoadingComponent, CardsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean = false;

  constructor(private spotify: SpotifyService) {
  }

  find(termino: string) {
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
