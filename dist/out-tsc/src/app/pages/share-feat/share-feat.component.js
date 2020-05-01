import { __decorate } from "tslib";
import * as $ from 'jquery';
import { Component } from '@angular/core';
let ShareFeatComponent = class ShareFeatComponent {
    constructor() { }
    ngOnInit() {
        var feat_id = $(location)[0].href.split('/')[$(location)[0].href.split('/').length - 1].replace('#', '');
        $('#feat-id').text(feat_id);
        $('#feat-id-02').text(feat_id);
    }
};
ShareFeatComponent = __decorate([
    Component({
        selector: 'app-share-feat',
        templateUrl: './share-feat.component.html',
        styleUrls: ['./share-feat.component.scss']
    })
], ShareFeatComponent);
export { ShareFeatComponent };
//# sourceMappingURL=share-feat.component.js.map