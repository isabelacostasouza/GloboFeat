import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-show-feat-content',
  templateUrl: './choose-show-feat-content.component.html',
  styleUrls: ['./choose-show-feat-content.component.scss']
})
export class ChooseShowFeatContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var api_url = 'https://globo-feat.herokuapp.com/?get_shows_json=true';

    $.ajax({
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      url: api_url,
      success: function(jsondata){
        let json_data = jsondata.users;

        let items = document.getElementsByClassName('data_text')  as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < items.length; i++) {
          const div_content_alt = $(items[i]).attr('alt');

          if (div_content_alt) {
            let content_title = json_data[div_content_alt].title;
            $(document.getElementsByClassName(div_content_alt)).text(content_title);
            $(items[i]).find('div').find('img').attr('alt', content_title);

            let content_img = json_data[div_content_alt].img_link;
            if(content_img != '')
              $(items[i]).find('div').find('img').attr('src', content_img);
            else
              $(items[i]).find('div').find('img').attr('src', 'https://i.pinimg.com/474x/bd/1c/a5/bd1ca559f0b2238bd67f316eb8a907ff.jpg');

          }
        }
      }
    });

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
    }

    let elem = document.getElementsByClassName('chosen-content')  as HTMLCollectionOf<HTMLElement>;
    elem[0].style.display = 'none';

    $("#close").click( function() {
      let elem = document.getElementsByClassName('chosen-content')  as HTMLCollectionOf<HTMLElement>;
      elem[0].style.display = 'none';
    });

    $(".choose-title").click( function(event) {
      var content_title = $(event.currentTarget)[0].querySelector('div').querySelector('img').alt;
      var content_img = $(event.currentTarget)[0].querySelector('div').querySelector('img').src;
      var content_id = $(event.currentTarget)[0].querySelector('span').innerText;

      $('#chosen-content-img').attr('src', content_img);
      $('#chosen-content-title').text(content_title);

      $('#choose-content-link').attr('href', ('/share-feat/') + content_id + '#01');

      let elem = document.getElementsByClassName('chosen-content')  as HTMLCollectionOf<HTMLElement>;
      elem[0].style.display = 'block';
    });
  }

}
