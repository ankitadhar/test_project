import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { TimeLineComponent } from './timeline/timeline.component';

@NgModule({
	imports: [CommonModule, FormsModule],

	declarations: [
		TimeLineComponent,
	],
	exports: [
		TimeLineComponent,
	],
	providers: []
})
export class AgauiModule { }