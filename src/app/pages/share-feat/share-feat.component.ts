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
    $('#feat-id').text(feat_id);
    $('#feat-id-02').text(feat_id);
  }

}
