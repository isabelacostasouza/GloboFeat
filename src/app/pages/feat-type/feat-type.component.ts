import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feat-type',
  templateUrl: './feat-type.component.html',
  styleUrls: ['./feat-type.component.scss']
})
export class FeatTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function selectSport() {
      $('#shows').attr('src', '../../../assets/popcorn-white.png');
      $('#sports').attr('src', '../../../assets/sports-yellow.png');
      $('#next-link').attr('href', "/choose-sport-feat-content");
    }

    function selectShow() {
      $('#sports').attr('src', '../../../assets/sports-white.png');
      $('#shows').attr('src', '../../../assets/popcorn-yellow.png');
      $('#next-link').attr('href', "/choose-show-feat-content");
    }

    $("#sports").click( function() {
      selectSport();
    });

    $("#shows").click( function() {
      selectShow();
    });
  }

}
