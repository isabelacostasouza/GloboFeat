import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var current_user_email = undefined;

    var cookies = document.cookie.split(';');
    cookies.forEach(element => {
      if(element.split('=')[0] == 'username') {
        current_user_email = element.split('=')[1];
      }
    });

    if (current_user_email != undefined) {
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
            var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';

            $.ajax({
              type: 'GET',
              crossDomain: true,
              dataType: 'json',
              url: api_url,
              success: function(jsondata){
                //user is logged in
                $('.exit').css('display', 'block');
                $('.add_friends').css('display', 'block');
                $('.personalize_profile').css('display', 'block');
              }
            });

					}
				});
      }
    } else {
      //user is not logged in
      $('.login_div').css('display', 'block');
      $('.create_account_div').css('display', 'block');
    }

    $('.add_friends').click( function() {
      let current_user = current_user_email.split('@')[0];

      var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&restore_friends=true';

      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );

      window.location.pathname = '/find-friends';
    });

    $('.personalize_profile').click( function() {
      let current_user = current_user_email.split('@')[0];

      var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&restore_personalization=true';

      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );

      window.location.pathname = '/step-01';
    });

    $('.exit').click( function() {
      document.cookie = 'username' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
      window.location.pathname = '/news';
    });
  }

}
