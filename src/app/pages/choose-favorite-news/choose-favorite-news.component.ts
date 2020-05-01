import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-favorite-news',
  templateUrl: './choose-favorite-news.component.html',
  styleUrls: ['./choose-favorite-news.component.scss']
})
export class ChooseFavoriteNewsComponent implements OnInit {

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
