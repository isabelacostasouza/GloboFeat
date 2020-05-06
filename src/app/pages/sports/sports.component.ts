import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let hasUser = false;
    let json_final_data;
    const items = $('#main-div').find('.carousel-item:visible');
    
    $('#search-input').keyup(() => {

      let search_input = $('#search-input')[0].value;

      if (search_input != '') {
        for (let i = 0; i < items.length - 1; i++) {
          let hasResult = false;
          const items_title = $(items[i]).find('p');

          let items_more = document.getElementsByClassName('more_content')  as HTMLCollectionOf<HTMLElement>;

          for (let i = 0; i < items_more.length; i++) {
            $(items_more[i]).css('display', 'none');
          }

          for (let j = 0; j < items_title.length; j++) {
            if(((items_title[j].innerText).toLowerCase()).includes(search_input)) {
              hasResult = true;
            }
          }

          if (!hasResult) {
            $(items[i]).parent().parent().parent().parent().removeClass("display");
            $(items[i]).parent().parent().parent().parent().toggleClass("no-display");
            $('.no-display').css('display', 'none');
          } else {
            $(items[i]).parent().parent().parent().parent().removeClass("no-display");
            $(items[i]).parent().parent().parent().parent().toggleClass("display");
            $('.display').css('display', 'block');
          }
        }
      }

      else {
        if (hasUser) {
          let items_more = document.getElementsByClassName('more_content')  as HTMLCollectionOf<HTMLElement>;

          for (let i = 0; i < items_more.length; i++) {
            $(items_more[i]).css('display', 'block');
          }

          for (let i = 0; i < items.length - 1; i++) {
              $(items[i]).removeClass("display");
              $(items[i]).parent().parent().parent().parent().removeClass("display");
              $(items[i]).removeClass("no-display");
              $(items[i]).parent().parent().parent().parent().removeClass("no-display");
          }

          let content_divs = document.getElementsByClassName('sports-section')  as HTMLCollectionOf<HTMLElement>;
          let sportCategories = json_final_data.users[current_user_email.split('@')[0]].sportCategories;
          for (let i = 0; i < content_divs.length; i++) {
              if (!(sportCategories.includes($(content_divs[i]).attr('class').split(' ')[1])) ) {
                $(content_divs[i]).css('display', 'none');
              }
          }

          let carousel_items = $('.more_content').find('.carousel-inner').find('.carousel-item')  as HTMLCollectionOf<HTMLElement>;
          for (let i = 0; i < carousel_items.length; i++) {
              if( sportCategories.includes($(carousel_items[i]).attr('class').split('item-')[1]) ) {
                $(carousel_items[i]).remove();
              }
          }


        }
      }
    });


    var api_url = 'https://globo-feat.herokuapp.com/?get_sports_json=true';

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

            let content_img = json_data[div_content_alt].imageURL;
            if(content_img != '')
              $(items[i]).find('div').find('img').attr('src', content_img);
            else
              $(items[i]).find('div').find('img').attr('src', 'https://i.pinimg.com/474x/bd/1c/a5/bd1ca559f0b2238bd67f316eb8a907ff.jpg');
          }
        }

      }
    });

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
      hasUser = true;
      
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

                  let content_divs = document.getElementsByClassName('sports-section')  as HTMLCollectionOf<HTMLElement>;
                  let sportCategories = jsondata.users[current_user_email.split('@')[0]].sportCategories;
                  json_final_data = jsondata;

                  for (let i = 0; i < content_divs.length; i++) {
                      if (!(sportCategories.includes($(content_divs[i]).attr('class').split(' ')[2])) ) {
                        $(content_divs[i]).css('display', 'none');
                      }
                  }

                  let carousel_items = $('.more_content').find('.carousel-inner').find('.carousel-item')  as HTMLCollectionOf<HTMLElement>;

                  for (let i = 0; i < carousel_items.length; i++) {
                      if( sportCategories.includes($(carousel_items[i]).attr('class').split('item-')[1]) ) {
                        $(carousel_items[i]).remove();
                      }
                  }

                } else {
                  window.location.pathname = '/step-01';
                }
              }
            });

					}
				});
      }
    }  else {
      let items = document.getElementsByClassName('more_content')  as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < items.length; i++) {
        $(items[i]).css('display', 'none');
      }
    }
  }

}
