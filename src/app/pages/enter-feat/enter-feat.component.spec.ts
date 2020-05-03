import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFeatComponent } from './enter-feat.component';

describe('EnterFeatComponent', () => {
  let component: EnterFeatComponent;
  let fixture: ComponentFixture<EnterFeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterFeatComponent ]
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
