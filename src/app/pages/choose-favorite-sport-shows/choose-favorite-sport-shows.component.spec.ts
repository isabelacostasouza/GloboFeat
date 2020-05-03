import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFavoriteSportShowsComponent } from './choose-favorite-sport-shows.component';

describe('ChooseFavoriteSportShowsComponent', () => {
  let component: ChooseFavoriteSportShowsComponent;
  let fixture: ComponentFixture<ChooseFavoriteSportShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFavoriteSportShowsComponent ]
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
