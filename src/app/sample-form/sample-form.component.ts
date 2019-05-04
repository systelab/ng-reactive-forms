import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector:    'app-sample-from',
	templateUrl: './sample-form.component.html',
	styleUrls:   ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {

	public profileForm: FormGroup

	constructor() {
	}

	public ngOnInit() {
		this.profileForm = new FormGroup({
			firstName: new FormControl(''),
			lastName:  new FormControl(''),
		});
	}

	public go() {
		console.log(this.profileForm.value);
	}

}
