import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopularProvider } from '../../providers/popular/popular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    PopularProvider
  ]
})
export class FeedPage {

  feed_movie = {
    name_movie: "Avengers: End Game",
    day_movie: 26,
    mouth_movie: "April",
    year_movie: 2019,
    feed_like: 12,
    feed_comments: 4,
    feed_time: "11h"
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popularProvider: PopularProvider) {
  }

  public list_pop = new Array<any>();

  ionViewDidLoad() {
    this.popularProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const obj_return = JSON.parse(response._body);
        this.list_pop = obj_return.results;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }



}
