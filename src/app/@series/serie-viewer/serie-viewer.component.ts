import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-serie-viewer',
  templateUrl: './serie-viewer.component.html',
  styleUrls: ['./serie-viewer.component.scss']
})
export class SerieViewerComponent implements OnInit {

  menu: string = 'top';

  constructor() {
  }

  ngOnInit(): void {
  }

}
