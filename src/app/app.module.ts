import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveSampleFormComponent } from './reactive-sample-form/reactive-sample-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService, MessagePopupService } from 'systelab-components/widgets/modal';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveSampleComponentComponent } from './reactive-sample-form/reactive-sample-component/reactive-sample-component.component';
import { TemplateDrivenSampleFormComponent } from './template-driven-sample-form/template-driven-sample-form.component';

@NgModule({
	declarations:    [
		AppComponent,
		ReactiveSampleFormComponent,
		ReactiveSampleComponentComponent,
		TemplateDrivenSampleFormComponent
	],
	imports:         [
		ReactiveFormsModule,
		BrowserModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),
		SystelabComponentsModule.forRoot()
	],
	providers:       [
		MessagePopupService,
		DialogService
	], bootstrap:    [AppComponent],
	entryComponents: []
})
export class AppModule {
}
