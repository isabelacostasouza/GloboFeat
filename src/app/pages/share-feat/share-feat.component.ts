import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-feat',
  templateUrl: './share-feat.component.html',
  styleUrls: ['./share-feat.component.scss']
})
export class ShareFeatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1].replace('#', '');
    $(".feat_id").text(feat_id);

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

    var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1].replace('#', '');
    $('#feat-id').text(feat_id);
    $('#feat-id-02').text(feat_id);

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

    function copyStringToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;

      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);

      el.select();

      document.execCommand('copy');
      document.body.removeChild(el);
   }

    $(".share").click( function() {
      let notification = document.getElementById('link-copied');
      $(notification).removeClass("link-inactive");
      $(notification).toggleClass("link-active");

      copyStringToClipboard(('http://globofeat.online/waiting-room/' + feat_id));

      setTimeout(setLinkCopiedToInactive, 3000);
    });

    $('.start').click( function() {
      let user_name = current_user_email.split('@')[0].split('_')[0];

      let content_id = feat_id.substring(0, feat_id.length - 1);
      content_id = content_id.substring(0, content_id.length - 1);

      var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';

      $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        url: api_url,
        success: function(jsondata){
          $.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            url: api_url,
            success: function(jsondata){
              var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1].replace('#', '');
              var api_url = 'https://globo-feat.herokuapp.com/?startFeat=' + feat_id;
              
              $.ajax({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function(jsondata){}
              });
            }
          });

          let feat_url = 'https://globofeat-api.herokuapp.com/r/' + feat_id + '/' + user_name + '/' + jsondata.feats[content_id].youtube_link;
          window.location.replace(feat_url);
        }
      });
    });
  }

}
