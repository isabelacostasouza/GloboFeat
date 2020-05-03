import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let ChooseFavoriteNewsComponent = class ChooseFavoriteNewsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementsByClassName('item');
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.height = String((screen.width * 0.31) - (screen.width * 0.05)) + 'px';
        }
        $(".quiz-answer").click(function () {
            $(this).toggleClass("active");
        });
    }
};
ChooseFavoriteNewsComponent = __decorate([
    Component({
        selector: 'app-choose-favorite-news',
        templateUrl: './choose-favorite-news.component.html',
        styleUrls: ['./choose-favorite-news.component.scss']
    })
], ChooseFavoriteNewsComponent);
export { ChooseFavoriteNewsComponent };
//# sourceMappingURL=choose-favorite-news.component.js.map