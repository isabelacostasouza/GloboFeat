import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoSportsComponent } from './content-info-sports.component';

describe('ContentInfoSportsComponent', () => {
  let component: ContentInfoSportsComponent;
  let fixture: ComponentFixture<ContentInfoSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInfoSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInfoSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
