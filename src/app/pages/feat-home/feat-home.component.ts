import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feat-home',
  templateUrl: './feat-home.component.html',
  styleUrls: ['./feat-home.component.scss']
})
export class FeatHomeComponent implements OnInit {

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
            var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';

            $.ajax({
              type: 'GET',
              crossDomain: true,
              dataType: 'json',
              url: api_url,
              success: function(jsondata){

                if(jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                  //have accessed before
                  $('#username').text(element);
                  $("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                  $('#navbar').css('display', 'block');
                } else {
                  window.location.pathname = '/step-01';
                }
              }
            });

					}
				});
      }
    } else {
      $('.add_friends').css('display', 'none');
      $('.personalize_profile').css('display', 'none');
    }
  }

}
