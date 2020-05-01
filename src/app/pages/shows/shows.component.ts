import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elem = document.getElementById('circle');
    
    elem.style.width = String(screen.width * 0.02) + 'px';
    elem.style.height = String(screen.width * 0.02) + 'px';
  }

}
