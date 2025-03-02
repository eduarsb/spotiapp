import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NewReleases } from '../interfaces/new-releases';

@Injectable({
	providedIn: 'root',
})
export class SpotifyService {
	constructor(private http: HttpClient) {
		console.log('Spotify service listo');
	}

	getQuery(query: string): any {
		const url = `https://api.spotify.com/v1/${query}`;
		const headers = new HttpHeaders({
			Authorization:
				'Bearer BQCm5KVUdRtThQqq399IPkCJhNPVyJek9LNBcDVISENgIkFPwE_qdOvB4Kry6wuWtGizRqZhIpm01fcz6hTvw7fPmsN0Hp_rnw0YGI8vxUt1UaVtSeGfk_NczaWlNhJVr29sKYySH8I',
		});

		return this.http.get(url, { headers });
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases').pipe(
			map((data: NewReleases) => {
				return data.albums.items;
			})
		);
	}

	getArtist(termino: string) {
		return this.getQuery(
			`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`
		).pipe(map((data:any) => data['artists'].items));
	}
}
