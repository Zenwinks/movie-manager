import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class MovieService {

  trMovies = [];
  trMoviesSubject = new Subject<any[]>();

  pMovies = [];
  pMoviesSubject = new Subject<any[]>();

  npMovies = [];
  npMoviesSubject = new Subject<any[]>();

  uMovies = [];
  uMoviesSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {
  }

  getTopRatedMoviesSubject() {
    return this.trMoviesSubject;
  }

  getTopRatedMovies(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/movie/top_rated?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page + '&region=FR')
      .subscribe(
        (response) => {
          this.trMovies = response;
          this.emitTopRatedMoviesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitTopRatedMoviesSubject() {
    this.trMoviesSubject.next(this.trMovies);
  }


  getPopularMoviesSubject() {
    return this.pMoviesSubject;
  }

  getPopularMovies(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/movie/popular?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page + '&region=FR')
      .subscribe(
        (response) => {
          this.pMovies = response;
          this.emitPopularMoviesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitPopularMoviesSubject() {
    this.pMoviesSubject.next(this.pMovies);
  }


  getNowPlayingMoviesSubject() {
    return this.npMoviesSubject;
  }

  getNowPlayingMovies(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page + '&region=FR')
      .subscribe(
        (response) => {
          this.npMovies = response;
          this.emitNowPlayingMoviesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitNowPlayingMoviesSubject() {
    this.npMoviesSubject.next(this.npMovies);
  }


  getUpcomingMoviesSubject() {
    return this.uMoviesSubject;
  }

  getUpcomingMovies(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/movie/upcoming?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page + '&region=FR')
      .subscribe(
        (response) => {
          this.uMovies = response;
          this.emitUpcomingMoviesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitUpcomingMoviesSubject() {
    this.uMoviesSubject.next(this.uMovies);
  }

}
