import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


@Injectable()
export class MovieProvider {
  private api_key = "e95120cf4c7f5c0d2f6fb49080b356fc";
  private url = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  
  getFavoritesMovies(){
    return this.http.get(this.url + "/movie/102295/lists?api_key=" + this.api_key + "&language=en-US&page=1");
  }

}

