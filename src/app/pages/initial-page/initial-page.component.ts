import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var api_url = 'https://globo-feat.herokuapp.com/?get_json=true';

    $.ajax({
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      url: api_url,
      success: function(jsondata){

        let items = Object.keys(jsondata.users);

        items.forEach(element => {
          if (!(jsondata.users[element].hasAccessedBefore)) {
            let new_div = '<div class="row" style="border: 1px solid white; margin-left: 0.5%; width: 100%; padding-top: 5%; margin-bottom: 5%;"> <p class="col-12">User: ' + jsondata.users[element].email +'</p> <p class="col-12">Senha: ' + jsondata.users[element].password + '</p> </div>'
            $('#free-accounts').append(new_div);
          }
        });
      }
    });
  }

}
