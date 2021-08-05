import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SoundsTabComponent } from './sounds-tab.component';

describe('SoundsTabComponent', () => {
  let component: SoundsTabComponent;
  let fixture: ComponentFixture<SoundsTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
