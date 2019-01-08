import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PopularProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PopularProvider {
  private api_key = "e95120cf4c7f5c0d2f6fb49080b356fc";
  private url = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello PopularProvider Provider');
  }

  getPopularMovies(){
    return this.http.get(this.url + "/movie/popular?api_key=" + this.api_key);
  }

}
