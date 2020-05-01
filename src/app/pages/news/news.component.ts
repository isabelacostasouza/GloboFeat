import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elem = document.getElementById('circle');
    
    elem.style.width = String(screen.width * 0.02) + 'px';
    elem.style.height = String(screen.width * 0.02) + 'px';

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

    $(".share").click( function() {
      let notification = document.getElementById('link-copied');
      $(notification).removeClass("link-inactive");
      $(notification).toggleClass("link-active");

      setTimeout(setLinkCopiedToInactive, 3000);
    });

    $(".test").click( function() {
      console.log('oi');
    });

    function test() {
      console.log('oioi');
    }


  }

}
