import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SerieService} from "../../service/serie.service";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.scss']
})
export class PopularSeriesComponent implements OnInit {

  popularSeries: any[];
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
    this.topRatedSeriesSubscription = this.serieService.getPopularSeriesSubject().subscribe(
      (movies: any[]) => {
        this.popularSeries = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.serieService.emitPopularSeriesSubject();
    this.serieService.getPopularSeries(1);
  }

  changePage(state: number) {
    this.serieService.getPopularSeries(this.actualPage + state);
  }

}
