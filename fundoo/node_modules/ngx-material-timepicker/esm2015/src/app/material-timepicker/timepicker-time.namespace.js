/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _moment from 'moment';
import { TimeAdapter } from './services/time-adapter';
import { TimeFormat } from './models/time-format.enum';
/** @type {?} */
const moment = _moment;
export var TimepickerTime;
(function (TimepickerTime) {
    /**
     * @param {?} format
     * @return {?}
     */
    function getHours(format) {
        return Array(format).fill(1).map((v, i) => {
            /** @type {?} */
            const angleStep = 30;
            /** @type {?} */
            const time = v + i;
            /** @type {?} */
            const angle = angleStep * time;
            return { time: time === 24 ? 0 : time, angle };
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
            return hours.map(value => {
                /** @type {?} */
                const hour = config.format === 24 ? value.time : TimeAdapter.formatHour(+value.time, config.format, config.period);
                /** @type {?} */
                const currentTime = moment().hour(+hour).format(TimeFormat.TWELVE);
                return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
            });
        }
        return hours;
    }
    TimepickerTime.disableHours = disableHours;
    /**
     * @param {?=} gap
     * @return {?}
     */
    function getMinutes(gap = 1) {
        /** @type {?} */
        const minutesCount = 60;
        /** @type {?} */
        const angleStep = 360 / minutesCount;
        /** @type {?} */
        const minutes = [];
        for (let i = 0; i < minutesCount; i++) {
            /** @type {?} */
            const angle = angleStep * i;
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
            const hour = TimeAdapter.formatHour(selectedHour, config.format, config.period);
            return minutes.map(value => {
                /** @type {?} */
                const currentTime = moment().hour(hour).minute(+value.time).format(TimeFormat.TWELVE);
                return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
            });
        }
        return minutes;
    }
    TimepickerTime.disableMinutes = disableMinutes;
})(TimepickerTime || (TimepickerTime = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci10aW1lLm5hbWVzcGFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3RpbWVwaWNrZXItdGltZS5uYW1lc3BhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O01BRy9DLE1BQU0sR0FBRyxPQUFPO0FBRXRCLE1BQU0sS0FBVyxjQUFjLENBeUQ5QjtBQXpERCxXQUFpQixjQUFjOzs7OztJQUUzQixTQUFnQixRQUFRLENBQUMsTUFBYztRQUNuQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDaEMsU0FBUyxHQUFHLEVBQUU7O2tCQUNkLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQzs7a0JBQ1osS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJO1lBQzlCLE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBUGUsdUJBQVEsV0FPdkIsQ0FBQTs7Ozs7O0lBRUQsU0FBZ0IsWUFBWSxDQUFDLEtBQXNCLEVBQUUsTUFBMEI7UUFDM0UsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFFMUIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDZixJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7c0JBQzVHLFdBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFFbEUseUJBQ08sS0FBSyxJQUNSLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFDdEY7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWRlLDJCQUFZLGVBYzNCLENBQUE7Ozs7O0lBRUQsU0FBZ0IsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDOztjQUN4QixZQUFZLEdBQUcsRUFBRTs7Y0FDakIsU0FBUyxHQUFHLEdBQUcsR0FBRyxZQUFZOztjQUM5QixPQUFPLEdBQUcsRUFBRTtRQUVsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDN0IsS0FBSyxHQUFHLFNBQVMsR0FBRyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQzthQUM3RDtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQVplLHlCQUFVLGFBWXpCLENBQUE7Ozs7Ozs7SUFFRCxTQUFnQixjQUFjLENBQUMsT0FBd0IsRUFBRSxZQUFvQixFQUFFLE1BQTBCO1FBQ3JHLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFOztrQkFFcEIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUUvRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7O3NCQUNqQixXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFFckYseUJBQ08sS0FBSyxJQUNSLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFDeEY7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWZlLDZCQUFjLGlCQWU3QixDQUFBO0FBQ0wsQ0FBQyxFQXpEZ0IsY0FBYyxLQUFkLGNBQWMsUUF5RDlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDbG9ja0ZhY2VUaW1lfSBmcm9tICcuL21vZGVscy9jbG9jay1mYWNlLXRpbWUuaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGltZUFkYXB0ZXJ9IGZyb20gJy4vc2VydmljZXMvdGltZS1hZGFwdGVyJztcbmltcG9ydCB7VGltZUZvcm1hdH0gZnJvbSAnLi9tb2RlbHMvdGltZS1mb3JtYXQuZW51bSc7XG5pbXBvcnQge0Rpc2FibGVkVGltZUNvbmZpZ30gZnJvbSAnLi9tb2RlbHMvZGlzYWJsZWQtdGltZS1jb25maWcuaW50ZXJmYWNlJztcblxuY29uc3QgbW9tZW50ID0gX21vbWVudDtcblxuZXhwb3J0IG5hbWVzcGFjZSBUaW1lcGlja2VyVGltZSB7XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoZm9ybWF0OiBudW1iZXIpOiBDbG9ja0ZhY2VUaW1lW10ge1xuICAgICAgICByZXR1cm4gQXJyYXkoZm9ybWF0KS5maWxsKDEpLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMzA7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gdiArIGk7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IGFuZ2xlU3RlcCAqIHRpbWU7XG4gICAgICAgICAgICByZXR1cm4ge3RpbWU6IHRpbWUgPT09IDI0ID8gMCA6IHRpbWUsIGFuZ2xlfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVIb3Vycyhob3VyczogQ2xvY2tGYWNlVGltZVtdLCBjb25maWc6IERpc2FibGVkVGltZUNvbmZpZyk6IENsb2NrRmFjZVRpbWVbXSB7XG4gICAgICAgIGlmIChjb25maWcubWluIHx8IGNvbmZpZy5tYXgpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGhvdXJzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbmZpZy5mb3JtYXQgPT09IDI0ID8gdmFsdWUudGltZSA6IFRpbWVBZGFwdGVyLmZvcm1hdEhvdXIoK3ZhbHVlLnRpbWUsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5wZXJpb2QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbW9tZW50KCkuaG91cigraG91cikuZm9ybWF0KFRpbWVGb3JtYXQuVFdFTFZFKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIVRpbWVBZGFwdGVyLmlzVGltZUF2YWlsYWJsZShjdXJyZW50VGltZSwgY29uZmlnLm1pbiwgY29uZmlnLm1heCwgJ2hvdXJzJylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXJzO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNaW51dGVzKGdhcCA9IDEpOiBDbG9ja0ZhY2VUaW1lW10ge1xuICAgICAgICBjb25zdCBtaW51dGVzQ291bnQgPSA2MDtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gMzYwIC8gbWludXRlc0NvdW50O1xuICAgICAgICBjb25zdCBtaW51dGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW51dGVzQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBhbmdsZVN0ZXAgKiBpO1xuICAgICAgICAgICAgaWYgKGkgJSBnYXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICBtaW51dGVzLnB1c2goe3RpbWU6IGksIGFuZ2xlOiBhbmdsZSAhPT0gMCA/IGFuZ2xlIDogMzYwfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbnV0ZXM7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVNaW51dGVzKG1pbnV0ZXM6IENsb2NrRmFjZVRpbWVbXSwgc2VsZWN0ZWRIb3VyOiBudW1iZXIsIGNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcubWluIHx8IGNvbmZpZy5tYXgpIHtcblxuICAgICAgICAgICAgY29uc3QgaG91ciA9IFRpbWVBZGFwdGVyLmZvcm1hdEhvdXIoc2VsZWN0ZWRIb3VyLCBjb25maWcuZm9ybWF0LCBjb25maWcucGVyaW9kKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbnV0ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG1vbWVudCgpLmhvdXIoaG91cikubWludXRlKCt2YWx1ZS50aW1lKS5mb3JtYXQoVGltZUZvcm1hdC5UV0VMVkUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhVGltZUFkYXB0ZXIuaXNUaW1lQXZhaWxhYmxlKGN1cnJlbnRUaW1lLCBjb25maWcubWluLCBjb25maWcubWF4LCAnbWludXRlcycpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW51dGVzO1xuICAgIH1cbn1cbiJdfQ==