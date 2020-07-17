import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../service/movie.service";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.scss']
})
export class PopularMovieComponent implements OnInit {

  popularMovies: any[];
  nbPages: number;
  actualPage: number;
  popularMoviesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private movieService: MovieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.popularMoviesSubscription = this.movieService.getPopularMoviesSubject().subscribe(
      (movies: any[]) => {
        this.popularMovies = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.movieService.emitPopularMoviesSubject();
    this.movieService.getPopularMovies(1);
  }

  changePage(state: number) {
    this.movieService.getPopularMovies(this.actualPage + state);
  }

}
