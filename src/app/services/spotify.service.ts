import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo!!');
  }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers =  new HttpHeaders({
      'Authorization': 'Bearer BQBStA01Gqd7O03uwIMJ21d2cjIeqoaVLkoBueev6EFcLj_eZrhqkKa34kkWATy0IuoB8WTgHYKm9ln3e_c'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    // const headers =  new HttpHeaders({
    //   'Authorization': 'Bearer BQD65HkJ7TL3J-QfFkSsoG6IZzV2fVqIeDjSfjaH7DI3DqovvzW4lpNxurPZ5Sihh6vUFKLOyNGRDm2tUg0'
    // });

    // this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //     .subscribe( data => {
    //       console.log(data);
    //     });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //   .pipe( map ( data => {
    //     return data['albums'].items;
    //   }));

    return this.getQuery('browse/new-releases')
      .pipe( map ( data => {
        return data['albums'].items;
      }));

  }

  getArtist ( termino: string) {

    return this.getQuery(`search?query=${ termino }&type=artist&market=MX&offset=0&limit=15`)
      .pipe( map ( data => data['artists'].items ));

  }


}
