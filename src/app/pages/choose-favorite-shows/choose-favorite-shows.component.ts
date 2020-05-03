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

    var current_user = undefined;

    var cookies = document.cookie.split(';');
    cookies.forEach(element => {
      if(element.split('=')[0] == 'username') {
        current_user = element.split('=')[1];
      }
    });

    if (current_user == undefined) {
      window.location.pathname = '/news';
    }

    current_user = current_user.split('@')[0];

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
      let array_is_empty = true;

      var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setHasAccessedBefore=true';
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );

      for (let i = 0; i < items.length; i++) {
        const item_class = $(items[i]).find('a')[0].className;
        if(item_class.includes('active')) {
          array_is_empty = false
          var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setShowCategory=' + $(items[i]).attr("alt");

          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", url, false );
          xmlHttp.send( null );
        }
      }

      if(!array_is_empty)
        window.location.pathname = '/step-02';

    });
  }

}
