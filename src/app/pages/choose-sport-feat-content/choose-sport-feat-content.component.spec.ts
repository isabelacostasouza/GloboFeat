import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSportFeatContentComponent } from './choose-sport-feat-content.component';

describe('ChooseSportFeatContentComponent', () => {
  let component: ChooseSportFeatContentComponent;
  let fixture: ComponentFixture<ChooseSportFeatContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSportFeatContentComponent ]
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
