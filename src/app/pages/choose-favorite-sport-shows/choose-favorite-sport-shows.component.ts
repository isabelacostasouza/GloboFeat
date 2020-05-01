import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-favorite-sport-shows',
  templateUrl: './choose-favorite-sport-shows.component.html',
  styleUrls: ['./choose-favorite-sport-shows.component.scss']
})
export class ChooseFavoriteSportShowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elem = document.getElementsByClassName('item')  as HTMLCollectionOf<HTMLElement>;
    
    for (let i = 0; i < elem.length; i++) {
      elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
    }

    $(".quiz-answer").click( function() {
      $(this).toggleClass( "active");
    });
  }

}
