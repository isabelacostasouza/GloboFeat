import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShowsComponent = class ShowsComponent {
    constructor() { }
    ngOnInit() {
        let elem = document.getElementById('circle');
        elem.style.width = String(screen.width * 0.02) + 'px';
        elem.style.height = String(screen.width * 0.02) + 'px';
    }
};
ShowsComponent = __decorate([
    Component({
        selector: 'app-shows',
        templateUrl: './shows.component.html',
        styleUrls: ['./shows.component.scss']
    })
], ShowsComponent);
export { ShowsComponent };
//# sourceMappingURL=shows.component.js.map