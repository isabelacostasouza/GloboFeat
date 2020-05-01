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
