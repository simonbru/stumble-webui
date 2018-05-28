import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakTabComponent } from './speak-tab.component';

describe('SpeakTabComponent', () => {
  let component: SpeakTabComponent;
  let fixture: ComponentFixture<SpeakTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
