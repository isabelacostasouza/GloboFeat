import { async, TestBed } from '@angular/core/testing';
import { ChooseSportFeatContentComponent } from './choose-sport-feat-content.component';
describe('ChooseSportFeatContentComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChooseSportFeatContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChooseSportFeatContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choose-sport-feat-content.component.spec.js.map