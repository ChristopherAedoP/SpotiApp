import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlBusquedaArtista:string = "https://api.spotify.com/v1/artists";

  token:any = 'Bearer BQCWk_np_E-S1ItmrfyNSXAhpPRQZeZHA-pHmDZv8A1ZPUOehnBub6BTgON2AMqhtaAJLBdEYgrk6T_ZoqfPYA';


  constructor(private _http:Http ) { }

  getArtistas(termino:string){
    let headers = new Headers();

    headers.append('Authorization',this.token )

    let query = `?q=${ termino }&type=artist`;
    let url= this.urlBusqueda + query;

    return this._http.get(url , {headers})
               .map( res=> {
                    //console.log(res.json().artists.items)
                    this.artistas =res.json().artists.items
                    // console.log(this.artistas)

                    return this.artistas;
               });



  }
  getArtista(id:string){

    let headers = new Headers();
    headers.append('Authorization',this.token )

    let query = `/${ id }`;
    let url= this.urlBusquedaArtista + query;

    return this._http.get(url , {headers})
               .map( res=> {
                    // console.log(res.json())
                    //this.artistas =res.json().artists.items
                    //console.log(this.artistas)

                    return res.json();
               });



  }
  getArtistaGetTop(id:string){

    let headers = new Headers();
    headers.append('Authorization',this.token )

    let query = `/${ id }/top-tracks?country=US`;
    let url= this.urlBusquedaArtista + query;

    return this._http.get(url , {headers})
               .map( res=> {
                    // console.log(res.json().tracks)
                    //this.artistas =res.json().artists.items
                    //console.log(this.artistas)

                    return res.json().tracks;
               });



  }
}
