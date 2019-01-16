/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimePeriod } from '../../models/time-period.enum';
import { TimepickerTime } from '../../timepicker-time.namespace';
var NgxMaterialTimepickerMinutesFaceComponent = /** @class */ (function () {
    function NgxMaterialTimepickerMinutesFaceComponent() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxMaterialTimepickerMinutesFaceComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['period'] && changes['period'].currentValue) {
            /** @type {?} */
            var minutes = TimepickerTime.getMinutes(this.minutesGap);
            this.minutesList = TimepickerTime.disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    };
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
    return NgxMaterialTimepickerMinutesFaceComponent;
}());
export { NgxMaterialTimepickerMinutesFaceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2NvbXBvbmVudHMvdGltZXBpY2tlci1taW51dGVzLWZhY2Uvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItbWludXRlcy1mYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFL0YsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFHL0Q7SUFBQTtRQU1JLGdCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBVVYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQWEvRCxDQUFDOzs7OztJQVhHLCtEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFOztnQkFDL0MsT0FBTyxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7O2dCQTdCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsd1NBQW9FO2lCQUN2RTs7O2lDQU1JLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBRUwsTUFBTTs7SUFhWCxnREFBQztDQUFBLEFBOUJELElBOEJDO1NBMUJZLHlDQUF5Qzs7O0lBRWxELGdFQUFrQzs7SUFDbEMsNkRBQW9COztJQUVwQixtRUFBdUM7O0lBQ3ZDLGlFQUE4Qjs7SUFDOUIsMkRBQTRCOztJQUM1Qiw0REFBeUI7O0lBQ3pCLDREQUF5Qjs7SUFDekIsMkRBQXdCOztJQUN4QiwrREFBNEI7O0lBRTVCLGlFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nsb2NrRmFjZVRpbWV9IGZyb20gJy4uLy4uL21vZGVscy9jbG9jay1mYWNlLXRpbWUuaW50ZXJmYWNlJztcbmltcG9ydCB7VGltZVVuaXR9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXVuaXQuZW51bSc7XG5pbXBvcnQge1RpbWVQZXJpb2R9IGZyb20gJy4uLy4uL21vZGVscy90aW1lLXBlcmlvZC5lbnVtJztcbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUaW1lcGlja2VyVGltZX0gZnJvbSAnLi4vLi4vdGltZXBpY2tlci10aW1lLm5hbWVzcGFjZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1taW51dGVzLWZhY2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlci1taW51dGVzLWZhY2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlck1pbnV0ZXNGYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIG1pbnV0ZXNMaXN0OiBDbG9ja0ZhY2VUaW1lW10gPSBbXTtcbiAgICB0aW1lVW5pdCA9IFRpbWVVbml0O1xuXG4gICAgQElucHV0KCkgc2VsZWN0ZWRNaW51dGU6IENsb2NrRmFjZVRpbWU7XG4gICAgQElucHV0KCkgc2VsZWN0ZWRIb3VyOiBudW1iZXI7XG4gICAgQElucHV0KCkgcGVyaW9kOiBUaW1lUGVyaW9kO1xuICAgIEBJbnB1dCgpIG1pblRpbWU6IE1vbWVudDtcbiAgICBASW5wdXQoKSBtYXhUaW1lOiBNb21lbnQ7XG4gICAgQElucHV0KCkgZm9ybWF0OiBudW1iZXI7XG4gICAgQElucHV0KCkgbWludXRlc0dhcDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIG1pbnV0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2xvY2tGYWNlVGltZT4oKTtcblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3BlcmlvZCddICYmIGNoYW5nZXNbJ3BlcmlvZCddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IFRpbWVwaWNrZXJUaW1lLmdldE1pbnV0ZXModGhpcy5taW51dGVzR2FwKTtcbiAgICAgICAgICAgIHRoaXMubWludXRlc0xpc3QgPSBUaW1lcGlja2VyVGltZS5kaXNhYmxlTWludXRlcyhtaW51dGVzLCB0aGlzLnNlbGVjdGVkSG91ciwge1xuICAgICAgICAgICAgICAgIG1pbjogdGhpcy5taW5UaW1lLFxuICAgICAgICAgICAgICAgIG1heDogdGhpcy5tYXhUaW1lLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==