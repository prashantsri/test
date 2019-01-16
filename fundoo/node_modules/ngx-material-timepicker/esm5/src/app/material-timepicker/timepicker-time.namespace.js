/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _moment from 'moment';
import { TimeAdapter } from './services/time-adapter';
import { TimeFormat } from './models/time-format.enum';
/** @type {?} */
var moment = _moment;
export var TimepickerTime;
(function (TimepickerTime) {
    /**
     * @param {?} format
     * @return {?}
     */
    function getHours(format) {
        return Array(format).fill(1).map(function (v, i) {
            /** @type {?} */
            var angleStep = 30;
            /** @type {?} */
            var time = v + i;
            /** @type {?} */
            var angle = angleStep * time;
            return { time: time === 24 ? 0 : time, angle: angle };
        });
    }
    TimepickerTime.getHours = getHours;
    /**
     * @param {?} hours
     * @param {?} config
     * @return {?}
     */
    function disableHours(hours, config) {
        if (config.min || config.max) {
            return hours.map(function (value) {
                /** @type {?} */
                var hour = config.format === 24 ? value.time : TimeAdapter.formatHour(+value.time, config.format, config.period);
                /** @type {?} */
                var currentTime = moment().hour(+hour).format(TimeFormat.TWELVE);
                return tslib_1.__assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
            });
        }
        return hours;
    }
    TimepickerTime.disableHours = disableHours;
    /**
     * @param {?=} gap
     * @return {?}
     */
    function getMinutes(gap) {
        if (gap === void 0) { gap = 1; }
        /** @type {?} */
        var minutesCount = 60;
        /** @type {?} */
        var angleStep = 360 / minutesCount;
        /** @type {?} */
        var minutes = [];
        for (var i = 0; i < minutesCount; i++) {
            /** @type {?} */
            var angle = angleStep * i;
            if (i % gap === 0) {
                minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
            }
        }
        return minutes;
    }
    TimepickerTime.getMinutes = getMinutes;
    /**
     * @param {?} minutes
     * @param {?} selectedHour
     * @param {?} config
     * @return {?}
     */
    function disableMinutes(minutes, selectedHour, config) {
        if (config.min || config.max) {
            /** @type {?} */
            var hour_1 = TimeAdapter.formatHour(selectedHour, config.format, config.period);
            return minutes.map(function (value) {
                /** @type {?} */
                var currentTime = moment().hour(hour_1).minute(+value.time).format(TimeFormat.TWELVE);
                return tslib_1.__assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
            });
        }
        return minutes;
    }
    TimepickerTime.disableMinutes = disableMinutes;
})(TimepickerTime || (TimepickerTime = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci10aW1lLm5hbWVzcGFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3RpbWVwaWNrZXItdGltZS5uYW1lc3BhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztJQUcvQyxNQUFNLEdBQUcsT0FBTztBQUV0QixNQUFNLEtBQVcsY0FBYyxDQXlEOUI7QUF6REQsV0FBaUIsY0FBYzs7Ozs7SUFFM0IsU0FBZ0IsUUFBUSxDQUFDLE1BQWM7UUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDOztnQkFDNUIsU0FBUyxHQUFHLEVBQUU7O2dCQUNkLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ1osS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJO1lBQzlCLE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFQZSx1QkFBUSxXQU92QixDQUFBOzs7Ozs7SUFFRCxTQUFnQixZQUFZLENBQUMsS0FBc0IsRUFBRSxNQUEwQjtRQUMzRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUUxQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLOztvQkFDWixJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7b0JBQzVHLFdBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFFbEUsNEJBQ08sS0FBSyxJQUNSLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFDdEY7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWRlLDJCQUFZLGVBYzNCLENBQUE7Ozs7O0lBRUQsU0FBZ0IsVUFBVSxDQUFDLEdBQU87UUFBUCxvQkFBQSxFQUFBLE9BQU87O1lBQ3hCLFlBQVksR0FBRyxFQUFFOztZQUNqQixTQUFTLEdBQUcsR0FBRyxHQUFHLFlBQVk7O1lBQzlCLE9BQU8sR0FBRyxFQUFFO1FBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUM3QixLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO2FBQzdEO1NBQ0o7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBWmUseUJBQVUsYUFZekIsQ0FBQTs7Ozs7OztJQUVELFNBQWdCLGNBQWMsQ0FBQyxPQUF3QixFQUFFLFlBQW9CLEVBQUUsTUFBMEI7UUFDckcsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O2dCQUVwQixNQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRS9FLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7O29CQUNkLFdBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUVyRiw0QkFDTyxLQUFLLElBQ1IsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUN4RjtZQUNOLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBZmUsNkJBQWMsaUJBZTdCLENBQUE7QUFDTCxDQUFDLEVBekRnQixjQUFjLEtBQWQsY0FBYyxRQXlEOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nsb2NrRmFjZVRpbWV9IGZyb20gJy4vbW9kZWxzL2Nsb2NrLWZhY2UtdGltZS5pbnRlcmZhY2UnO1xuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUaW1lQWRhcHRlcn0gZnJvbSAnLi9zZXJ2aWNlcy90aW1lLWFkYXB0ZXInO1xuaW1wb3J0IHtUaW1lRm9ybWF0fSBmcm9tICcuL21vZGVscy90aW1lLWZvcm1hdC5lbnVtJztcbmltcG9ydCB7RGlzYWJsZWRUaW1lQ29uZmlnfSBmcm9tICcuL21vZGVscy9kaXNhYmxlZC10aW1lLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5jb25zdCBtb21lbnQgPSBfbW9tZW50O1xuXG5leHBvcnQgbmFtZXNwYWNlIFRpbWVwaWNrZXJUaW1lIHtcblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3Vycyhmb3JtYXQ6IG51bWJlcik6IENsb2NrRmFjZVRpbWVbXSB7XG4gICAgICAgIHJldHVybiBBcnJheShmb3JtYXQpLmZpbGwoMSkubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSAzMDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSB2ICsgaTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gYW5nbGVTdGVwICogdGltZTtcbiAgICAgICAgICAgIHJldHVybiB7dGltZTogdGltZSA9PT0gMjQgPyAwIDogdGltZSwgYW5nbGV9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZGlzYWJsZUhvdXJzKGhvdXJzOiBDbG9ja0ZhY2VUaW1lW10sIGNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogQ2xvY2tGYWNlVGltZVtdIHtcbiAgICAgICAgaWYgKGNvbmZpZy5taW4gfHwgY29uZmlnLm1heCkge1xuXG4gICAgICAgICAgICByZXR1cm4gaG91cnMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VyID0gY29uZmlnLmZvcm1hdCA9PT0gMjQgPyB2YWx1ZS50aW1lIDogVGltZUFkYXB0ZXIuZm9ybWF0SG91cigrdmFsdWUudGltZSwgY29uZmlnLmZvcm1hdCwgY29uZmlnLnBlcmlvZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBtb21lbnQoKS5ob3VyKCtob3VyKS5mb3JtYXQoVGltZUZvcm1hdC5UV0VMVkUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhVGltZUFkYXB0ZXIuaXNUaW1lQXZhaWxhYmxlKGN1cnJlbnRUaW1lLCBjb25maWcubWluLCBjb25maWcubWF4LCAnaG91cnMnKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cnM7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZ2FwID0gMSk6IENsb2NrRmFjZVRpbWVbXSB7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXNDb3VudCA9IDYwO1xuICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSAzNjAgLyBtaW51dGVzQ291bnQ7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbnV0ZXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IGFuZ2xlU3RlcCAqIGk7XG4gICAgICAgICAgICBpZiAoaSAlIGdhcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMucHVzaCh7dGltZTogaSwgYW5nbGU6IGFuZ2xlICE9PSAwID8gYW5nbGUgOiAzNjB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWludXRlcztcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZGlzYWJsZU1pbnV0ZXMobWludXRlczogQ2xvY2tGYWNlVGltZVtdLCBzZWxlY3RlZEhvdXI6IG51bWJlciwgY29uZmlnOiBEaXNhYmxlZFRpbWVDb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5taW4gfHwgY29uZmlnLm1heCkge1xuXG4gICAgICAgICAgICBjb25zdCBob3VyID0gVGltZUFkYXB0ZXIuZm9ybWF0SG91cihzZWxlY3RlZEhvdXIsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5wZXJpb2QpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWludXRlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbW9tZW50KCkuaG91cihob3VyKS5taW51dGUoK3ZhbHVlLnRpbWUpLmZvcm1hdChUaW1lRm9ybWF0LlRXRUxWRSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFUaW1lQWRhcHRlci5pc1RpbWVBdmFpbGFibGUoY3VycmVudFRpbWUsIGNvbmZpZy5taW4sIGNvbmZpZy5tYXgsICdtaW51dGVzJylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbnV0ZXM7XG4gICAgfVxufVxuIl19