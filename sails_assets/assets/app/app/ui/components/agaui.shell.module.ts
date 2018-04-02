import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ROUTES } from '../../app.routes';


import { TimeLineComponent } from './timeline/timeline.component';

@NgModule({
	imports: [CommonModule, FormsModule, RouterModule.forRoot(ROUTES, { useHash: true })],
	declarations: [
		TimeLineComponent,
	],
	exports: [
		TimeLineComponent,
	],
	providers: []
})
export class AgauiModule { }