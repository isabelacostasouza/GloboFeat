import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-info-sports',
  templateUrl: './content-info-sports.component.html',
  styleUrls: ['./content-info-sports.component.scss']
})
export class ContentInfoSportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var current_user_email = undefined;
    var user_has_liked_content = false;


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

                const news = jsondata.users[current_user_email.split('@')[0]].news;

                let items = document.getElementsByClassName('chosenCategory')  as HTMLCollectionOf<HTMLElement>;
    
                for (let i = 0; i < items.length; i++) {
                  const item_alt = $(items[i]).find('p').attr('alt');

                  if (!(news.includes(item_alt))) {
                    $(items[i]).css('display', 'none');
                  } else {
                    $(items[i]).css('display', 'block');
                  }
                }

                if(jsondata.users[current_user_email.split('@')[0]].hasAccessedBefore) {
                  //have accessed before
                  $('#username').text(element);
                  $("#user_picture").attr("src", ('../../../assets/users_data/user_pics/' + element + '.jpg'));
                  $('#navbar').css('display', 'block');

                  let has_recomendations = false;
                  let content_id = $(location).attr('href').split('/')[4];
                  let user_friends = jsondata.users[current_user_email.split('@')[0]].friends;
                  let contents_liked = jsondata.users[current_user_email.split('@')[0]].likedSports;

                  if(contents_liked.includes(content_id)) {
                    user_has_liked_content = true;
                    setLikeToActive();
                  }

                  for (let i = 0; i < user_friends.length; i++) {
                    let liked_sports_from_friend = jsondata.users[user_friends[i]].likedSports;

                    if(liked_sports_from_friend.includes(content_id)) {
                      has_recomendations = true;
                      let friend_data = '<div id="img" style="margin-left: 5.5%;"><img src="../../../assets/users_data/user_pics/' + user_friends[i] + '.jpg" class="d-block" alt="js" />';
                      $('.recomendations').append(friend_data);
                    }
                  }
                  
                  if(!has_recomendations) {
                    let friend_data = '<div id="img" style="margin-left: 5.5%;"><img src="../../../assets/no-user.png" class="d-block" alt="js" />';
                      $('.recomendations').append(friend_data);
                  }
                } else {
                  window.location.pathname = '/step-01';
                }
              }
            });

					}
				});
      }
    } else {
      //user is not logged in
      $('.create-feat').css('display', 'none');
      $('.recomended-by').css('display', 'none');
      $('.recomend-feat').css('display', 'none');
    }

        var api_url = 'https://globo-feat.herokuapp.com/?get_sports_json=true';

        $.ajax({
          type: 'GET',
          crossDomain: true,
          dataType: 'json',
          url: api_url,
          success: function(jsondata){
            let json_data = jsondata.users;
            let content_data = json_data[$(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1]];

            $('#content_img').attr('src', content_data.imageURL);
            $('#title').text(content_data.title.toUpperCase());
            $('#description').find('p').text(content_data.sinopse);
          }
        });



        function setLikeToInactive() {
          let notification = document.getElementById('like');
          $(notification).removeClass("like-active");
          $(notification).toggleClass("like-inactive");
          $('#like-img').attr('src', '../../../assets/star-white.png');
        }

        function setLikeToActive() {
          let notification = document.getElementById('like');
          $(notification).removeClass("like-inactive");
          $(notification).toggleClass("like-active");
          $('#like-img').attr('src', '../../../assets/star-black.png');

          if(!user_has_liked_content) {
            let content_id = $(location).attr('href').split('/')[4];
            let current_user = current_user_email.split('@')[0];
    
            var url = 'https://globo-feat.herokuapp.com/?user=' + current_user + '&setSportLiked=' + content_id;
    
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", url, false );
            xmlHttp.send( null );
          }
        }

        $(".like").click( function() {
          let items = document.getElementsByClassName('like')  as HTMLCollectionOf<HTMLElement>;

          for (let i = 0; i < items.length; i++) {
            if($(items[i]).hasClass("like-active")) {
              setLikeToInactive();
            } else {
              setLikeToActive();
            }
          }
        });

        var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1];
        $('#create-feat-link').attr('href', ('/share-feat/' + feat_id));
  }

}
