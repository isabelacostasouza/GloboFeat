import { async, TestBed } from '@angular/core/testing';
import { ChooseFavoriteSportShowsComponent } from './choose-favorite-sport-shows.component';
describe('ChooseFavoriteSportShowsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChooseFavoriteSportShowsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChooseFavoriteSportShowsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choose-favorite-sport-shows.component.spec.js.map