import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.scss']
})
export class FindFriendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var current_user = undefined;

    var cookies = document.cookie.split(';');
    cookies.forEach(element => {
      if(element.split('=')[0] == 'username') {
        current_user = element.split('=')[1];
      }
    });

    current_user = current_user.split('@')[0];

    if (current_user == undefined) {
      window.location.pathname = '/news';
    }

    let elem = document.getElementsByClassName('item')  as HTMLCollectionOf<HTMLElement>;
    
    $('#search-input').keyup(() => {
      let search_input = $('#search-input')[0].value;

      if (search_input != '') {
        for (let i = 0; i < elem.length; i++) {
          if ($(elem[i]).attr("alt").includes(search_input.toLowerCase())) {
            $(elem[i]).css('display', 'inline-block');
          } else {
            $(elem[i]).css('display', 'none');
          }
        }
      }

      else {
        for (let i = 0; i < elem.length; i++) {
          $(elem[i]).css('display', 'inline-block');
        }
      }
    });

    for (let i = 0; i < elem.length; i++) {
      if ($(elem[i]).attr("alt") == current_user) {
        $(elem[i]).attr("alt", 'tereza_cristina');
        $(elem[i]).find('a').attr("alt", 'tereza_cristina');

        let img_url = 'url(../../../assets/users_data/user_pics/' + 'tereza_cristina' + '.jpg';
        $(elem[i]).css('background-image', img_url);

        $(elem[i]).find('div').find('p').text('tereza_cristina');
      } else {
        let img_url = 'url(../../../assets/users_data/user_pics/' + $(elem[i]).attr("alt") + '.jpg';
        $(elem[i]).css('background-image', img_url);
      }
      elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
    }

    $(".quiz-answer").click( function() {
      $(this).toggleClass( "active");
    });

    $(".save").click( function() {
      let selected_friends = document.getElementsByClassName('active')  as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < selected_friends.length; i++) {
        const selected_friend = $(selected_friends[i]).attr("alt");

        var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setFriend=' + selected_friend;

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
      }

      window.location.pathname = '/news';
    });
  }

}
