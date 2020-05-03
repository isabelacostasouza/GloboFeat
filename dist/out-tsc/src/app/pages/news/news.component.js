import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementById('circle');
        elem.style.width = String(screen.width * 0.02) + 'px';
        elem.style.height = String(screen.width * 0.02) + 'px';
        function setLinkCopiedToInactive() {
            let notification = document.getElementById('link-copied');
            $(notification).removeClass("link-active");
            $(notification).toggleClass("link-inactive");
        }
        $(".item").click(function () {
            let items = document.getElementsByClassName('item');
            for (let i = 0; i < items.length; i++) {
                $(items[i]).removeClass("active");
            }
            $(this).toggleClass("active");
        });
        $(".share").click(function () {
            let notification = document.getElementById('link-copied');
            $(notification).removeClass("link-inactive");
            $(notification).toggleClass("link-active");
            setTimeout(setLinkCopiedToInactive, 3000);
        });
        function test() {
            console.log('oi');
        }
    }
};
NewsComponent = __decorate([
    Component({
        selector: 'app-news',
        templateUrl: './news.component.html',
        styleUrls: ['./news.component.scss']
    })
], NewsComponent);
export { NewsComponent };
//# sourceMappingURL=news.component.js.map