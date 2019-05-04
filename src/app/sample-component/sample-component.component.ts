import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector:    'app-sample-component',
	templateUrl: './sample-component.component.html',
	styleUrls:   ['./sample-component.component.scss'],
	providers:   [
		{
			provide:     NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SampleComponentComponent),
			multi:       true
		}
	]
})
export class SampleComponentComponent implements ControlValueAccessor {

	public id: string;
	public description: string;
	public isDisabled = false;

	public onChange: any = () => {
	};

	public onTouched: any = () => {
	};

	constructor() {
	}

	public registerOnChange(fn: any) {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	public writeValue(value: any) {
		this.id = value.id;
		this.description = value.description;
	}

	public setDisabledState(isDisabled: boolean) {
		this.isDisabled = isDisabled;
	}

	public doChange() {
		this.onChange({id: this.id, description: this.description});
		this.onTouched();
	}

}
