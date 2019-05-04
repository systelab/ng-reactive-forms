import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService, MessagePopupService } from 'systelab-components/widgets/modal';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponentComponent } from './sample-component/sample-component.component';

@NgModule({
	declarations:    [
		AppComponent,
		SampleFormComponent,
		SampleComponentComponent
	],
	imports:         [
		ReactiveFormsModule,
		BrowserModule,
		HttpClientModule,
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
