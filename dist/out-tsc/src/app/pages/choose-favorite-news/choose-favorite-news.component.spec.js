import { async, TestBed } from '@angular/core/testing';
import { ChooseFavoriteNewsComponent } from './choose-favorite-news.component';
describe('ChooseFavoriteNewsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChooseFavoriteNewsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChooseFavoriteNewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choose-favorite-news.component.spec.js.map