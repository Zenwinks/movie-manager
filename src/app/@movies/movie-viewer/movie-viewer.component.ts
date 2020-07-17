import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-viewer',
  templateUrl: './movie-viewer.component.html',
  styleUrls: ['./movie-viewer.component.scss']
})
export class MovieViewerComponent implements OnInit {

  menu: string = 'top';

  constructor() {
  }

  ngOnInit(): void {
  }

}
