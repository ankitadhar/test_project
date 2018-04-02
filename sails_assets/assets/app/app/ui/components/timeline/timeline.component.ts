import {
  Component, Input, SimpleChange, EventEmitter, Output, ElementRef,
  OnInit, NgZone
} from '@angular/core';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'timeline',
  templateUrl: 'timeline.template.html',
  styleUrls: ['./timeline.style.css']

})
export class TimeLineComponent implements OnInit {

  static chosenInitialized = false;
  private d1: string;
  private d2: string;
  private endDate;
  private min: number;
  private max: number;
  private startTime;
  private endTime;
  private rangeValues: number[] = [];
  private resetRangeBar: boolean;

  private plotArea;

  @Input() range: string;
  @Input() reloadComponent;
  @Input() timelineShown: boolean;
  @Input() resetTimeDropDown: boolean;
  private oldRange = this.range;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() timeRange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public el: ElementRef, private zone: NgZone) {
    this.resetRangeBar = true;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if ((changes['range']) && (changes['range'].currentValue)) {

      let gt = changes['range'].currentValue['gte'];
      this.d1 = this.getFormattedDate(new Date(gt));

      let lt = changes['range'].currentValue['lte'];
      this.d2 = this.getFormattedDate(new Date(lt));
      this.rangeValues = [gt, lt];
      if (changes['range'].currentValue['resetMarker'] === true) {
        this.resetSlider(gt, lt);
      }

      if ($(this.el.nativeElement).find('.slider').slider('instance')) {
        $(this.el.nativeElement).find('.slider').slider('pips', 'destroy');
        $(this.el.nativeElement).find('.slider').slider('destroy');
      }

      this.drawSlider();
      this.resetRangeBar = true;
    }
  }

  resetSlider(gt, lt) {
    const self = this;
    this.min = gt;
    this.max = lt;
    this.rangeValues = [gt, lt];
  }

  drawSlider() {
    const self = this;
    $(this.el.nativeElement).find('.slider').slider({
      range: true,
      min: this.min,
      max: this.max,
      values: [this.rangeValues[0], this.rangeValues[1]],
      stop: function (event, ui) {
        self.onSlideEnd(ui.values[0], ui.values[1]);
      },
      slide: function (e, ui) {
        const diff = self.rangeValues[1] - self.rangeValues[0];
        let val1 = '<div id="slider_tooltip">' + self.formatTime($(this).slider('values', 0)) + '</div>';
        let val2 = '<div id="slider_tooltip">' + self.formatTime($(this).slider('values', 1)) + '</div>';
        if (diff === 30 * 24 * 60 * 60 * 1000) {
          val1 = '<div id="slider_tooltip">' + self.getDay($(this).slider('values', 0)) + ' ' +
            self.formatTime($(this).slider('values', 0)) + '</div>';
          val2 = '<div id="slider_tooltip">' + self.getDay($(this).slider('values', 1)) + ' ' +
            self.formatTime($(this).slider('values', 1)) + '</div>';
        }
        $(this).children('.ui-slider-handle').first().html(val1);
        $(this).children('.ui-slider-handle').last().html(val2);
      },
      create: function (e, ui) {
        const diff = self.rangeValues[1] - self.rangeValues[0];
        let val1 = '<div id="slider_tooltip">' + self.formatTime($(this).slider('values', 0)) + '</div>';
        let val2 = '<div id="slider_tooltip">' + self.formatTime($(this).slider('values', 1)) + '</div>';
        if (diff === 30 * 24 * 60 * 60 * 1000) {
          val1 = '<div id="slider_tooltip">' + self.getDay($(this).slider('values', 0)) + ' ' +
            self.formatTime($(this).slider('values', 0)) + '</div>';
          val2 = '<div id="slider_tooltip">' + self.getDay($(this).slider('values', 1)) + ' ' +
            self.formatTime($(this).slider('values', 1)) + '</div>';
        }
        $(this).children('.ui-slider-handle').first().html(val1);
        $(this).children('.ui-slider-handle').last().html(val2);
      }
    });
    this.addSliderPips();

  }

  addSliderPips() {
    const self = this;
    // 1 week
    let weekNo = -1;
    let monthNo = -1;
    const viewDiff = this.rangeValues[1] - this.rangeValues[0];
    const actualDiff = this.max - this.min;
    // 30 mins
    if (viewDiff <= 30 * 60 * 1000) {
      if (actualDiff <= 90 * 60 * 1000) {
        $(this.el.nativeElement).find('.slider').slider('pips', {
          rest: 'label',
          step: 3 * 60 * 1000,
          formatLabel: function (val) {
            return self.formatTime(val);
          }
        });
      }
      // 1 hr
    } else if (viewDiff <= 60 * 60 * 1000 && actualDiff <= 2 * 60 * 60 * 1000) {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        step: 5 * 60 * 1000,
        formatLabel: function (val) {
          return self.formatTime(val);
        }
      });
      // 1 day
    } else if (viewDiff <= 24 * 60 * 60 * 1000 && actualDiff <= 24 * 60 * 60 * 1000) {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        step: 60 * 60 * 1000,
        formatLabel: function (val) {
          return self.formatTime(val);
        }
      });

    } else if (viewDiff <= 7 * 24 * 60 * 60 * 1000 && actualDiff <= 7 * 24 * 60 * 60 * 1000) {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        step: 24 * 60 * 60 * 1000,
        formatLabel: function (val) {
          return self.getDay(val) + ' ' + self.formatTime(val);
        }
      });
    } else if (viewDiff <= 30 * 24 * 60 * 60 * 1000 && actualDiff <= 30 * 24 * 60 * 60 * 1000) {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        step: 7 * 24 * 60 * 60 * 1000,
        formatLabel: function (val) {
          weekNo = weekNo + 1;
          return 'Week ' + weekNo;

        }
      });
    } else if (viewDiff <= 6 * 30 * 24 * 60 * 60 * 1000 && actualDiff <= 6 * 30 * 24 * 60 * 60 * 1000) {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        step: 30 * 24 * 60 * 60 * 1000,
        formatLabel: function (val) {
          monthNo = monthNo + 1;
          return 'Month ' + monthNo;

        }
      });
    } else if (viewDiff <= 12 * 30 * 24 * 60 * 60 * 1000 && actualDiff <= 12 * 30 * 24 * 60 * 60 * 1000) {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        step: 30 * 24 * 60 * 60 * 1000,
        formatLabel: function (val) {
          monthNo = monthNo + 1;
          return 'Month ' + monthNo;

        }
      });
    } else {
      $(this.el.nativeElement).find('.slider').slider('pips', {
        rest: 'label',
        formatLabel: function (val) {
          return self.formatTime(val);
        }
        //  labels:['Day 0','Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']


      });
    }
  }


  getDay(val) {
    val = new Date(val);
    const day = val.getUTCDay();
    let str = '';
    switch (day) {
      case 0:
        str = 'Sun';
        break;
      case 1:
        str = 'Mon';
        break;
      case 2:
        str = 'Tue';
        break;
      case 3:
        str = 'Wed';
        break;
      case 4:
        str = 'Thu';
        break;
      case 5:
        str = 'Fri';
        break;
      case 6:
        str = 'Sat';
        break;
    }
    return str;
  }

  formatTime(val) {
    val = new Date(val);
    let hrs = val.getHours();
    if (hrs < 10) {
      hrs = '0' + hrs;
    }
    let min = val.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }
    return hrs + ':' + min;
  }

  getFormattedDate(date) {
    return (date.getUTCMonth() + 1) + '/' +
      date.getUTCDate() + '/' +
      date.getUTCFullYear() + ' ' +
      date.getUTCHours() + ':' +
      date.getUTCMinutes();
  }

  handleChange(event) {
    this.d1 = this.getFormattedDate(new Date(event.values[0]));
    this.d2 = this.getFormattedDate(new Date(event.values[1]));
  }

  onSlideEnd(gt, lt) {
    const newRange = {
      'gte': 0,
      'lte': lt,
      'resetMarker': false,
      'refreshTime': false
    };
    newRange.gte = gt;
    this.zone.run(() => {
      this.notify.emit(newRange);
    });


    this.resetRangeBar = true;
  }
}