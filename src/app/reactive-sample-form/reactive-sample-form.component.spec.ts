import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormComponent } from './sample.component';

describe('SampleComponent', () => {
	let component: SampleFormComponent;
	let fixture: ComponentFixture<SampleFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SampleFormComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SampleFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component)
			.toBeTruthy();
	});
});
