import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let FeatTypeComponent = class FeatTypeComponent {
    constructor() { }
    ngOnInit() {
        function selectSport() {
            $('#shows').attr('src', '../../../assets/popcorn-white.png');
            $('#sports').attr('src', '../../../assets/sports-yellow.png');
            $('#next-link').attr('href', "/choose-sport-feat-content");
        }
        function selectShow() {
            $('#sports').attr('src', '../../../assets/sports-white.png');
            $('#shows').attr('src', '../../../assets/popcorn-yellow.png');
            $('#next-link').attr('href', "/choose-show-feat-content");
        }
        $("#sports").click(function () {
            selectSport();
        });
        $("#shows").click(function () {
            selectShow();
        });
    }
};
FeatTypeComponent = __decorate([
    Component({
        selector: 'app-feat-type',
        templateUrl: './feat-type.component.html',
        styleUrls: ['./feat-type.component.scss']
    })
], FeatTypeComponent);
export { FeatTypeComponent };
//# sourceMappingURL=feat-type.component.js.map