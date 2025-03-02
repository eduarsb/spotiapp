import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { SpotifyService } from '../../services/spotify.service';
import { DATA } from '../../constants/data';
import { Item } from '../../interfaces/new-releases';

@Component({
	selector: 'app-home',
	imports: [LoadingComponent, CardsComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	newSongs: Item[] = DATA.albums.items;
	loading: boolean = false;

	// constructor(private spotifyService: SpotifyService) {
	// 	this.loading = true;

	// 	this.spotifyService.getNewReleases().subscribe((data: any) => {
	// 		console.log('datos', data);
	// 		this.newSongs = data;
	// 		this.loading = false;
	// 	});
	// }
}
