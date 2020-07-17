import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SerieService} from "../../service/serie.service";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-airing-today-series',
  templateUrl: './airing-today-series.component.html',
  styleUrls: ['./airing-today-series.component.scss']
})
export class AiringTodaySeriesComponent implements OnInit {

  airingTodaySeries: any[];
  nbPages: number;
  actualPage: number;
  airingTodaySeriesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private serieService: SerieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.airingTodaySeriesSubscription = this.serieService.getAiringTodaySeriesSubject().subscribe(
      (movies: any[]) => {
        this.airingTodaySeries = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.serieService.emitAiringTodaySeriesSubject();
    this.serieService.getAiringTodaySeries(1);
  }

  changePage(state: number) {
    this.serieService.getAiringTodaySeries(this.actualPage + state);
  }

}
