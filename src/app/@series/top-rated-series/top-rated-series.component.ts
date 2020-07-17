import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {VariablesService} from "../../service/variables.service";
import {SerieService} from "../../service/serie.service";

@Component({
  selector: 'app-top-rated-series',
  templateUrl: './top-rated-series.component.html',
  styleUrls: ['./top-rated-series.component.scss']
})
export class TopRatedSeriesComponent implements OnInit {

  topRatedSeries: any[];
  nbPages: number;
  actualPage: number;
  topRatedSeriesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private serieService: SerieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.topRatedSeriesSubscription = this.serieService.getTopRatedSeriesSubject().subscribe(
      (movies: any[]) => {
        this.topRatedSeries = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.serieService.emitTopRatedSeriesSubject();
    this.serieService.getTopRatedSeries(1);
  }

  changePage(state: number) {
    this.serieService.getTopRatedSeries(this.actualPage + state);
  }

}
