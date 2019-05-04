import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSampleComponentComponent } from './sample-component.component';

describe('SampleComponentComponent', () => {
  let component: ReactiveSampleComponentComponent;
  let fixture: ComponentFixture<ReactiveSampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
