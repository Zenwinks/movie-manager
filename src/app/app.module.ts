import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TopRatedMovieComponent} from './@movies/top-rated-movie/top-rated-movie.component';
import {PopularMovieComponent} from './@movies/popular-movie/popular-movie.component';
import {MovieService} from "./service/movie.service";
import {VariablesService} from "./service/variables.service";
import {NowPlayingComponent} from './@movies/now-playing/now-playing.component';
import {UpcomingMoviesComponent} from './@movies/upcoming-movies/upcoming-movies.component';
import {MovieViewerComponent} from './@movies/movie-viewer/movie-viewer.component';
import {SerieViewerComponent} from './@series/serie-viewer/serie-viewer.component';
import { TopRatedSeriesComponent } from './@series/top-rated-series/top-rated-series.component';
import { PopularSeriesComponent } from './@series/popular-series/popular-series.component';
import { OnAirSeriesComponent } from './@series/on-air-series/on-air-series.component';
import { AiringTodaySeriesComponent } from './@series/airing-today-series/airing-today-series.component';
import {SerieService} from "./service/serie.service";

@NgModule({
  declarations: [
    AppComponent,
    TopRatedMovieComponent,
    PopularMovieComponent,
    NowPlayingComponent,
    UpcomingMoviesComponent,
    MovieViewerComponent,
    SerieViewerComponent,
    TopRatedSeriesComponent,
    PopularSeriesComponent,
    OnAirSeriesComponent,
    AiringTodaySeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    SerieService,
    VariablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
