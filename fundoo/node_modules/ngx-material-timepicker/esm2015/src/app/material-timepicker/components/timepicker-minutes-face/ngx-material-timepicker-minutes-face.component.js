/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimePeriod } from '../../models/time-period.enum';
import { TimepickerTime } from '../../timepicker-time.namespace';
export class NgxMaterialTimepickerMinutesFaceComponent {
    constructor() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            /** @type {?} */
            const minutes = TimepickerTime.getMinutes(this.minutesGap);
            this.minutesList = TimepickerTime.disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
NgxMaterialTimepickerMinutesFaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-material-timepicker-minutes-face',
                template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
            }] }
];
NgxMaterialTimepickerMinutesFaceComponent.propDecorators = {
    selectedMinute: [{ type: Input }],
    selectedHour: [{ type: Input }],
    period: [{ type: Input }],
    minTime: [{ type: Input }],
    maxTime: [{ type: Input }],
    format: [{ type: Input }],
    minutesGap: [{ type: Input }],
    minuteChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minutesList;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.timeUnit;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.selectedMinute;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.selectedHour;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.period;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minTime;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.maxTime;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.format;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minutesGap;
    /** @type {?} */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.minuteChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1taW51dGVzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFL0YsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFPL0QsTUFBTSxPQUFPLHlDQUF5QztJQUp0RDtRQU1JLGdCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBVVYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQWEvRCxDQUFDOzs7OztJQVhHLFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFOztrQkFDL0MsT0FBTyxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7OztZQTdCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsd1NBQW9FO2FBQ3ZFOzs7NkJBTUksS0FBSzsyQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFFTCxNQUFNOzs7O0lBWFAsZ0VBQWtDOztJQUNsQyw2REFBb0I7O0lBRXBCLG1FQUF1Qzs7SUFDdkMsaUVBQThCOztJQUM5QiwyREFBNEI7O0lBQzVCLDREQUF5Qjs7SUFDekIsNERBQXlCOztJQUN6QiwyREFBd0I7O0lBQ3hCLCtEQUE0Qjs7SUFFNUIsaUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2xvY2tGYWNlVGltZX0gZnJvbSAnLi4vLi4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtUaW1lVW5pdH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcbmltcG9ydCB7VGltZVBlcmlvZH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RpbWUtcGVyaW9kLmVudW0nO1xuaW1wb3J0IHtNb21lbnR9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1RpbWVwaWNrZXJUaW1lfSBmcm9tICcuLi8uLi90aW1lcGlja2VyLXRpbWUubmFtZXNwYWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXRlcmlhbC10aW1lcGlja2VyLW1pbnV0ZXMtZmFjZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXRlcmlhbC10aW1lcGlja2VyLW1pbnV0ZXMtZmFjZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTWludXRlc0ZhY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgbWludXRlc0xpc3Q6IENsb2NrRmFjZVRpbWVbXSA9IFtdO1xuICAgIHRpbWVVbml0ID0gVGltZVVuaXQ7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RlZE1pbnV0ZTogQ2xvY2tGYWNlVGltZTtcbiAgICBASW5wdXQoKSBzZWxlY3RlZEhvdXI6IG51bWJlcjtcbiAgICBASW5wdXQoKSBwZXJpb2Q6IFRpbWVQZXJpb2Q7XG4gICAgQElucHV0KCkgbWluVGltZTogTW9tZW50O1xuICAgIEBJbnB1dCgpIG1heFRpbWU6IE1vbWVudDtcbiAgICBASW5wdXQoKSBmb3JtYXQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtaW51dGVzR2FwOiBudW1iZXI7XG5cbiAgICBAT3V0cHV0KCkgbWludXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDbG9ja0ZhY2VUaW1lPigpO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1sncGVyaW9kJ10gJiYgY2hhbmdlc1sncGVyaW9kJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gVGltZXBpY2tlclRpbWUuZ2V0TWludXRlcyh0aGlzLm1pbnV0ZXNHYXApO1xuICAgICAgICAgICAgdGhpcy5taW51dGVzTGlzdCA9IFRpbWVwaWNrZXJUaW1lLmRpc2FibGVNaW51dGVzKG1pbnV0ZXMsIHRoaXMuc2VsZWN0ZWRIb3VyLCB7XG4gICAgICAgICAgICAgICAgbWluOiB0aGlzLm1pblRpbWUsXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFRpbWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICBwZXJpb2Q6IHRoaXMucGVyaW9kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19