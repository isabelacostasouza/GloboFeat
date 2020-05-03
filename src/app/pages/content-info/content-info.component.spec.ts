import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoComponent } from './content-info.component';

describe('ContentInfoComponent', () => {
  let component: ContentInfoComponent;
  let fixture: ComponentFixture<ContentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
