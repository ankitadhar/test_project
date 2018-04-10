import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_CONST } from './main.constants';
import { CommonService } from '../shared/services/index';
declare var $: any;



@Component({
  selector: 'app-main',
  templateUrl: './main.template.html',
  styleUrls: ['./main.style.css']
})
export class MainComponent {
  private tab: any;
  private rangeInput: any;
  private timelineShown: boolean;
  private resetTimeDropDown: boolean;
  private timestamp: any = [];
  private duration: string;
  private windowInnerHeight: number;

  constructor(private _commonService: CommonService) {
    const curr_time = new Date().getTime();
    const stringifiedConst = JSON.stringify(MAIN_CONST);
    this.tab = {
      'overview': true,
      'accounts': false,
      'assets': false,
      'cases': false,
      'contacts': false
    };
    this.rangeInput = {
      'gte': curr_time - (30 * 24 * 60 * 60000),
      'lte': curr_time,
      'resetMarker': true,
      'refreshTime': true
    };
    this.duration = 'Last 1 Month';
    this.timestamp = JSON.parse(stringifiedConst)['DURATIONS'];
    this.timelineShown = false;
    this.resetTimeDropDown = false;
    this.windowInnerHeight = window.innerHeight - 75;
  }

  onResize(event) {
    const component = this;
    component.windowInnerHeight = window.innerHeight - 75;
  }

  timeLineToggle() {
    const component = this;
    component.timelineShown = !this.timelineShown;
  }

  view(curTab) {
    const component = this;
    component.tab = {
      'overview': false,
      'accounts': false,
      'assets': false,
      'cases': false,
      'contacts': false
    };

    component.tab[curTab] = true;
  }

  getDurationDetails(duration) {
    const component = this;
    component.duration = duration;
    const curr_time = new Date().getTime();

    component.rangeInput = {
      'gte': curr_time - (30 * 24 * 60 * 60000),
      'lte': curr_time,
      'resetMarker': true,
      'refreshTime': true
    };

    switch (duration) {
      case 'Last 1 Month': component.rangeInput['gte'] = curr_time - (30 * 24 * 60 * 60000); break;
      case 'Last 6 Months': component.rangeInput['gte'] = curr_time - (6 * 30 * 24 * 60 * 60000); break;
      case 'Last 1 Year': component.rangeInput['gte'] = curr_time - (12 * 30 * 24 * 60 * 60000); break;
    }
  }

  onRangeChanged(message: Object): void {
    const component = this;
    component.rangeInput = message;
  }

  ngOnInit() {

  }
}
