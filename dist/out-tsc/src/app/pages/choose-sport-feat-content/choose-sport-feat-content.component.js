import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let ChooseSportFeatContentComponent = class ChooseSportFeatContentComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementsByClassName('chosen-content');
        elem[0].style.display = 'none';
        $("#close").click(function () {
            let elem = document.getElementsByClassName('chosen-content');
            elem[0].style.display = 'none';
        });
        $(".choose-title").click(function (event) {
            var content_title = $(event.currentTarget)[0].querySelector('div').querySelector('img').alt;
            var content_img = $(event.currentTarget)[0].querySelector('div').querySelector('img').src;
            var content_id = $(event.currentTarget)[0].querySelector('span').innerText;
            $('#chosen-content-img').attr('src', content_img);
            $('#chosen-content-title').text(content_title);
            $('#choose-content-link').attr('href', ('/share-feat/') + content_id + '#01');
            let elem = document.getElementsByClassName('chosen-content');
            elem[0].style.display = 'block';
        });
    }
};
ChooseSportFeatContentComponent = __decorate([
    Component({
        selector: 'app-choose-sport-feat-content',
        templateUrl: './choose-sport-feat-content.component.html',
        styleUrls: ['./choose-sport-feat-content.component.scss']
    })
], ChooseSportFeatContentComponent);
export { ChooseSportFeatContentComponent };
//# sourceMappingURL=choose-sport-feat-content.component.js.map