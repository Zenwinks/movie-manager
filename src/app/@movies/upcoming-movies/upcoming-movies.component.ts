import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../service/movie.service";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  upcomingMovies: any[];
  nbPages: number;
  actualPage: number;
  upcomingMoviesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private movieService: MovieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.upcomingMoviesSubscription = this.movieService.getUpcomingMoviesSubject().subscribe(
      (movies: any[]) => {
        this.upcomingMovies = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.movieService.emitUpcomingMoviesSubject();
    this.movieService.getUpcomingMovies(1);
  }

  changePage(state: number) {
    this.movieService.getUpcomingMovies(this.actualPage + state);
  }

}
