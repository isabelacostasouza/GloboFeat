import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFeatComponent } from './share-feat.component';

describe('ShareFeatComponent', () => {
  let component: ShareFeatComponent;
  let fixture: ComponentFixture<ShareFeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
