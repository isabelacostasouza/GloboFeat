import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-feat',
  templateUrl: './enter-feat.component.html',
  styleUrls: ['./enter-feat.component.scss']
})
export class EnterFeatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //let feat_id =  $('#input_content')[0].value;
    //$('#create-feat-link').attr('href', ('/share-feat/' + feat_id));
  }

}
