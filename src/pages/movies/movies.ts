import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [
    MovieProvider
  ]
})
export class MoviesPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public movieProvider: MovieProvider) {
  }

  public list_favs = new Array<any>();

  ionViewDidLoad() {
    this.movieProvider.getFavoritesMovies().subscribe(
      data => {
        const response = (data as any);
        const obj_return = JSON.parse(response._body);
        this.list_favs = obj_return.results;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
