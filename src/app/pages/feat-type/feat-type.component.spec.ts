import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatTypeComponent } from './feat-type.component';

describe('FeatTypeComponent', () => {
  let component: FeatTypeComponent;
  let fixture: ComponentFixture<FeatTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
