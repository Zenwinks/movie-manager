import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SerieService} from "../../service/serie.service";
import {VariablesService} from "../../service/variables.service";

@Component({
  selector: 'app-on-air-series',
  templateUrl: './on-air-series.component.html',
  styleUrls: ['./on-air-series.component.scss']
})
export class OnAirSeriesComponent implements OnInit {

  onAirSeries: any[];
  nbPages: number;
  actualPage: number;
  onAirSeriesSubscription: Subscription;

  imgPath: string;

  constructor(private httpClient: HttpClient,
              private serieService: SerieService,
              private params: VariablesService) {
  }

  ngOnInit(): void {
    this.imgPath = this.params.imgPath;
    this.onAirSeriesSubscription = this.serieService.getOnAirSeriesSubject().subscribe(
      (movies: any[]) => {
        this.onAirSeries = movies['results'];
        this.nbPages = +movies['total_pages'];
        this.actualPage = +movies['page'];
      }
    );
    this.serieService.emitOnAirSeriesSubject();
    this.serieService.getOnAirSeries(1);
  }

  changePage(state: number) {
    this.serieService.getOnAirSeries(this.actualPage + state);
  }

}
