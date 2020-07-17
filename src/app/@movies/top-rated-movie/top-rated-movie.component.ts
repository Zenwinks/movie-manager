import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../service/movie.service";
import {Subscription} from "rxjs";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.scss']
})
export class TopRatedMovieComponent implements OnInit {

  topRatedMovies: any[];
  nbPages: number;
  actualPage: number;
  topRatedMoviesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private movieService: MovieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.topRatedMoviesSubscription = this.movieService.getTopRatedMoviesSubject().subscribe(
      (movies: any[]) => {
        this.topRatedMovies = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.movieService.emitTopRatedMoviesSubject();
    this.movieService.getTopRatedMovies(1);
  }

  changePage(state: number) {
    this.movieService.getTopRatedMovies(this.actualPage + state);
  }

}
