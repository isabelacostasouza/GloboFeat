import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFavoriteShowsComponent } from './choose-favorite-shows.component';

describe('ChooseFavoriteShowsComponent', () => {
  let component: ChooseFavoriteShowsComponent;
  let fixture: ComponentFixture<ChooseFavoriteShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFavoriteShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFavoriteShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
