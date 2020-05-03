import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatHomeComponent } from './feat-home.component';

describe('FeatHomeComponent', () => {
  let component: FeatHomeComponent;
  let fixture: ComponentFixture<FeatHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
