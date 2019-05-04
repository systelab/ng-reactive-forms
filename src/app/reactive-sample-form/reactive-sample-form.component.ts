import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector:    'app-reactive-sample-from',
	templateUrl: './reactive-sample-form.component.html',
	styleUrls:   ['./reactive-sample-form.component.scss']
})
export class ReactiveSampleFormComponent implements OnInit {

	public profileForm: FormGroup

	constructor() {
	}

	public ngOnInit() {
		this.profileForm = new FormGroup({
			firstName: new FormControl(''),
			lastName:  new FormControl(''),
			gender:    new FormControl({id: 'M', description: 'COMMON_MALE'})
		});
	}

	public go() {
		console.log(this.profileForm.value);
	}
}
