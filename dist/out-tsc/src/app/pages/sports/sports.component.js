import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SportsComponent = class SportsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementById('circle');
        elem.style.width = String(screen.width * 0.02) + 'px';
        elem.style.height = String(screen.width * 0.02) + 'px';
    }
};
SportsComponent = __decorate([
    Component({
        selector: 'app-sports',
        templateUrl: './sports.component.html',
        styleUrls: ['./sports.component.scss']
    })
], SportsComponent);
export { SportsComponent };
//# sourceMappingURL=sports.component.js.map