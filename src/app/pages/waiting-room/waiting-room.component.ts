import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    function checkIfFeatHasStarted() {
      var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1];

      let wanted_content_id = feat_id.substring(0, feat_id.length - 1);
      wanted_content_id = wanted_content_id.substring(0, wanted_content_id.length - 1);

      let wanted_feat_id = parseInt(feat_id.substr(feat_id.length - 2));

      var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';

        $.ajax({
          type: 'GET',
          crossDomain: true,
          dataType: 'json',
          url: api_url,
          success: function(jsondata){
            let wanted_content_state = jsondata.feats[wanted_content_id].hasStarted[0][wanted_feat_id];
            if(wanted_content_state == 'true') {
              
              var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';

              $.ajax({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function(jsondata){

                  var current_user_email = undefined;

                  var cookies = document.cookie.split(';');
                  cookies.forEach(element => {
                    if(element.split('=')[0] == 'username') {
                      current_user_email = element.split('=')[1];
                    }
                  });
                  
                  let user_name;

                  if (current_user_email != undefined) {
                    user_name = (current_user_email.split('@')[0].split('_')[0])
                  } else {
                    user_name = 'anonimo';
                  }
                  
                  let feat_url = 'https://globofeat-api.herokuapp.com/r/' + feat_id + '/' + user_name + '/' + jsondata.feats[wanted_content_id].youtube_link;
                  window.location.replace(feat_url);
                }
              });
            }
          }
        });
    }

    checkIfFeatHasStarted();

  }

  checkIfFeatHasStarted() {
    try {
      var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1];
  
      let wanted_content_id = feat_id.substring(0, feat_id.length - 1);
      wanted_content_id = wanted_content_id.substring(0, wanted_content_id.length - 1);
  
      let wanted_feat_id = parseInt(feat_id.substr(feat_id.length - 2));
  
      var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
  
        $.ajax({
          type: 'GET',
          crossDomain: true,
          dataType: 'json',
          url: api_url,
          success: function(jsondata){
            let wanted_content_state = jsondata.feats[wanted_content_id].hasStarted[0][wanted_feat_id];
            if(wanted_content_state == 'true') {
              
              var api_url = 'https://globo-feat.herokuapp.com/?get_feat_json=true';
  
              $.ajax({
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                url: api_url,
                success: function(jsondata){
  
                  var current_user_email = undefined;
  
                  var cookies = document.cookie.split(';');
                  cookies.forEach(element => {
                    if(element.split('=')[0] == 'username') {
                      current_user_email = element.split('=')[1];
                    }
                  });
                  
                  let user_name;
  
                  if (current_user_email != undefined) {
                    user_name = (current_user_email.split('@')[0].split('_')[0])
                  } else {
                    user_name = 'anonimo';
                  }
                  
                  let feat_url = 'https://globofeat-api.herokuapp.com/r/' + feat_id + '/' + user_name + '/' + jsondata.feats[wanted_content_id].youtube_link;
                  window.location.replace(feat_url);
                }
              });
            }
          }
        });
      } catch(e){}
  }
  
  intervalID = setInterval(this.checkIfFeatHasStarted, 5000);
}

