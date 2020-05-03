import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.scss']
})
export class ContentInfoComponent implements OnInit {

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
        let content_data = json_data[$(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1]];

        $('#content_img').attr('src', content_data.img_link);
        $('#title').text(content_data.title.toUpperCase());
        $('#description').find('p').text(content_data.sinopse);
      }
    });



    function setLikeToInactive() {
      let notification = document.getElementById('like');
      $(notification).removeClass("like-active");
      $(notification).toggleClass("like-inactive");
      $('#like-img').attr('src', '../../../assets/star-white.png')
    }

    function setLikeToActive() {
      let notification = document.getElementById('like');
      $(notification).removeClass("like-inactive");
      $(notification).toggleClass("like-active");
      $('#like-img').attr('src', '../../../assets/star-black.png')
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
