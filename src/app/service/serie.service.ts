import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class SerieService {

  trSeries = [];
  trSeriesSubject = new Subject<any[]>();

  pSeries = [];
  pSeriesSubject = new Subject<any[]>();

  oaSeries = [];
  oaSeriesSubject = new Subject<any[]>();

  atSeries = [];
  atSeriesSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {
  }

  getTopRatedSeriesSubject() {
    return this.trSeriesSubject;
  }

  getTopRatedSeries(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/tv/top_rated?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page)
      .subscribe(
        (response) => {
          this.trSeries = response;
          this.emitTopRatedSeriesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitTopRatedSeriesSubject() {
    this.trSeriesSubject.next(this.trSeries);
  }


  getPopularSeriesSubject() {
    return this.pSeriesSubject;
  }

  getPopularSeries(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/tv/popular?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page)
      .subscribe(
        (response) => {
          this.pSeries = response;
          this.emitPopularSeriesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitPopularSeriesSubject() {
    this.pSeriesSubject.next(this.pSeries);
  }


  getOnAirSeriesSubject() {
    return this.oaSeriesSubject;
  }

  getOnAirSeries(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/tv/on_the_air?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page)
      .subscribe(
        (response) => {
          this.oaSeries = response;
          this.emitOnAirSeriesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitOnAirSeriesSubject() {
    this.oaSeriesSubject.next(this.oaSeries);
  }


  getAiringTodaySeriesSubject() {
    return this.atSeriesSubject;
  }

  getAiringTodaySeries(page: number) {
    this.httpClient
      .get<any[]>('https://api.themoviedb.org/3/tv/airing_today?api_key=339f7f05499b3a564b406d2e73b0044e&language=fr-FR&page=' + page)
      .subscribe(
        (response) => {
          this.atSeries = response;
          this.emitAiringTodaySeriesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitAiringTodaySeriesSubject() {
    this.atSeriesSubject.next(this.atSeries);
  }

}
