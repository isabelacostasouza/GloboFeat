import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.login-btn').click(function() {
      var email = $('#input-email')[0].value;
      var password = $('#input-password')[0].value;

      var users_file = Object(require('../../../assets/users_data/users.json'))['users'];
      var users_keys = Object.keys(users_file);

      var correct_credentials = false;

      users_keys.forEach(element => {
        if ((users_file[element].email) == email) {
          if ((users_file[element].password) == password) {
            correct_credentials = true;
          }
        }
      });

      if(correct_credentials) {
        document.location.href = '/news';
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        document.cookie = "username=" + email;
        document.location.href = '/news';
      } else {
        let incorrect_data = document.getElementById('try-again');
        incorrect_data.style.display = 'block'
      }

    });
  }

}
