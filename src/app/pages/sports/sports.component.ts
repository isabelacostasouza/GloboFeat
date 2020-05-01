import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elem = document.getElementById('circle');
    
    elem.style.width = String(screen.width * 0.02) + 'px';
    elem.style.height = String(screen.width * 0.02) + 'px';
  }

}
