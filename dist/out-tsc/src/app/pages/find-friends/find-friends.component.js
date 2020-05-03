import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let FindFriendsComponent = class FindFriendsComponent {
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
FindFriendsComponent = __decorate([
    Component({
        selector: 'app-find-friends',
        templateUrl: './find-friends.component.html',
        styleUrls: ['./find-friends.component.scss']
    })
], FindFriendsComponent);
export { FindFriendsComponent };
//# sourceMappingURL=find-friends.component.js.map