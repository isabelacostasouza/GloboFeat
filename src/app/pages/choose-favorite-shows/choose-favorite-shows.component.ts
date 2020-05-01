import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-favorite-shows',
  templateUrl: './choose-favorite-shows.component.html',
  styleUrls: ['./choose-favorite-shows.component.scss']
})
export class ChooseFavoriteShowsComponent implements OnInit {

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
