import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../service/movie.service";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  nowPlayingMovies: any[];
  nbPages: number;
  actualPage: number;
  nowPlayingMoviesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private movieService: MovieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.nowPlayingMoviesSubscription = this.movieService.getNowPlayingMoviesSubject().subscribe(
      (movies: any[]) => {
        this.nowPlayingMovies = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.movieService.emitNowPlayingMoviesSubject();
    this.movieService.getNowPlayingMovies(1);
  }

  changePage(state: number) {
    this.movieService.getNowPlayingMovies(this.actualPage + state);
  }

}
