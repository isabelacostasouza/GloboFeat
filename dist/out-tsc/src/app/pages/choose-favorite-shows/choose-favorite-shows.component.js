import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let ChooseFavoriteShowsComponent = class ChooseFavoriteShowsComponent {
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
ChooseFavoriteShowsComponent = __decorate([
    Component({
        selector: 'app-choose-favorite-shows',
        templateUrl: './choose-favorite-shows.component.html',
        styleUrls: ['./choose-favorite-shows.component.scss']
    })
], ChooseFavoriteShowsComponent);
export { ChooseFavoriteShowsComponent };
//# sourceMappingURL=choose-favorite-shows.component.js.map