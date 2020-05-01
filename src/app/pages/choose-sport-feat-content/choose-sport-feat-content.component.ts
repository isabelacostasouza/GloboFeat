import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-sport-feat-content',
  templateUrl: './choose-sport-feat-content.component.html',
  styleUrls: ['./choose-sport-feat-content.component.scss']
})
export class ChooseSportFeatContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
