import { async, TestBed } from '@angular/core/testing';
import { ChooseShowFeatContentComponent } from './choose-show-feat-content.component';
describe('ChooseShowFeatContentComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChooseShowFeatContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChooseShowFeatContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choose-show-feat-content.component.spec.js.map