import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFavoriteNewsComponent } from './choose-favorite-news.component';

describe('ChooseFavoriteNewsComponent', () => {
  let component: ChooseFavoriteNewsComponent;
  let fixture: ComponentFixture<ChooseFavoriteNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFavoriteNewsComponent ]
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
