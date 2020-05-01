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

    let row_04 = document.getElementById('row-04');
    row_04.style.display = 'none';

    $(".quiz-answer").click( function() {
      $(this).toggleClass( "active");
    });

    $(".load-more").click( function() {
      let load_more = document.getElementById('load-more');
      load_more.style.display = 'none';

      let row_04 = document.getElementById('row-04');
      row_04.style.display = 'block';
    });

    $(".save").click( function() {
      let items = document.getElementsByClassName('item')  as HTMLCollectionOf<HTMLElement>;
      let selected_contents = [];

      for (let i = 0; i < items.length; i++) {
        const item_class = $(items[i]).find('a')[0].className;
        if(item_class.includes('active')) {
          selected_contents.push($(items[i]).attr("alt"));
        }
      }

      console.log(selected_contents);
    });
  }

}
