import { async, TestBed } from '@angular/core/testing';
import { EnterFeatComponent } from './enter-feat.component';
describe('EnterFeatComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnterFeatComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EnterFeatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=enter-feat.component.spec.js.map