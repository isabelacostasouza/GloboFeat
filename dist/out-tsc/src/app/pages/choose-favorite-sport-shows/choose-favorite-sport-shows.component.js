import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let ChooseFavoriteSportShowsComponent = class ChooseFavoriteSportShowsComponent {
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
ChooseFavoriteSportShowsComponent = __decorate([
    Component({
        selector: 'app-choose-favorite-sport-shows',
        templateUrl: './choose-favorite-sport-shows.component.html',
        styleUrls: ['./choose-favorite-sport-shows.component.scss']
    })
], ChooseFavoriteSportShowsComponent);
export { ChooseFavoriteSportShowsComponent };
//# sourceMappingURL=choose-favorite-sport-shows.component.js.map