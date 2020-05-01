import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elem = document.getElementById('circle');
    
    elem.style.width = String(screen.width * 0.02) + 'px';
    elem.style.height = String(screen.width * 0.02) + 'px';
    
    var current_user_email = undefined;

    var cookies = document.cookie.split(';');
    cookies.forEach(element => {
      if(element.split('=')[0] == 'username') {
        current_user_email = element.split('=')[1];
      }
    });

    if (current_user_email != undefined) {
      let navbar_without_login = document.getElementById('navbar-without-login');
      navbar_without_login.style.display = 'none';

      let navbar = document.getElementById('navbar');
      navbar.style.display = 'block';

      var request = new XMLHttpRequest();

			request.open('GET', '../../../assets/users_data/users.json');
			request.responseType = 'json';
			request.send();

			request.onload = function() {
        var json_data = request.response;
				var users_data = Object(json_data)['users'];
        var users_keys = Object.keys(users_data);

        var username = undefined;
        var user_picture = undefined;

        users_keys.forEach(element => {
					if ((users_data[element].email) == current_user_email) {
            if(users_data[element].hasAccessedBefore) {
              //have accessed before
              $('#username').text(element);
              $("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
            } else {
              window.location.pathname = '/step-01';
            }
					}
				});
      }
    }

    function setLinkCopiedToInactive() {
      let notification = document.getElementById('link-copied');
      $(notification).removeClass("link-active");
      $(notification).toggleClass("link-inactive");
    }

    $(".item").click( function() {
      let items = document.getElementsByClassName('item')  as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < items.length; i++) {
        $(items[i]).removeClass("active");
      }
      $(this).toggleClass("active");
    });

    $(".share").click( function() {
      let notification = document.getElementById('link-copied');
      $(notification).removeClass("link-inactive");
      $(notification).toggleClass("link-active");

      setTimeout(setLinkCopiedToInactive, 3000);
    });

  }

}
