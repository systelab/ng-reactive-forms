import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenSampleFormComponent } from './template-driven-sample-form.component';

describe('TemplateDrivenSampleFormComponent', () => {
  let component: TemplateDrivenSampleFormComponent;
  let fixture: ComponentFixture<TemplateDrivenSampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenSampleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenSampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
