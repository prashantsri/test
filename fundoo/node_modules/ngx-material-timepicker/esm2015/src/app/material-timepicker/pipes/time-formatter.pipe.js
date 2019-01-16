/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import { TimeUnit } from '../models/time-unit.enum';
export class TimeFormatterPipe {
    /**
     * @param {?} time
     * @param {?} timeUnit
     * @return {?}
     */
    transform(time, timeUnit) {
        if (time === undefined) {
            return time;
        }
        switch (timeUnit) {
            case TimeUnit.HOUR:
                return moment.utc(time * 3600 * 1000).format('HH');
            case TimeUnit.MINUTE:
                return moment.utc(time * 60 * 1000).format('mm');
            default:
                throw new Error('no such time unit');
        }
    }
}
TimeFormatterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeFormatter'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL3RpbWUtZm9ybWF0dGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUtsRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFFMUIsU0FBUyxDQUFDLElBQVksRUFBRSxRQUFrQjtRQUN0QyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELFFBQVEsUUFBUSxFQUFFO1lBQ2QsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDZCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDaEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JEO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7OztZQWpCSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGVBQWU7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1RpbWVVbml0fSBmcm9tICcuLi9tb2RlbHMvdGltZS11bml0LmVudW0nO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RpbWVGb3JtYXR0ZXInXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVGb3JtYXR0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odGltZTogbnVtYmVyLCB0aW1lVW5pdDogVGltZVVuaXQpOiBhbnkge1xuICAgICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRpbWVVbml0KSB7XG4gICAgICAgICAgICBjYXNlIFRpbWVVbml0LkhPVVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudC51dGModGltZSAqIDM2MDAgKiAxMDAwKS5mb3JtYXQoJ0hIJyk7XG4gICAgICAgICAgICBjYXNlIFRpbWVVbml0Lk1JTlVURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lICogNjAgKiAxMDAwKS5mb3JtYXQoJ21tJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc3VjaCB0aW1lIHVuaXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19