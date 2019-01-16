/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import { TimeUnit } from '../models/time-unit.enum';
var TimeFormatterPipe = /** @class */ (function () {
    function TimeFormatterPipe() {
    }
    /**
     * @param {?} time
     * @param {?} timeUnit
     * @return {?}
     */
    TimeFormatterPipe.prototype.transform = /**
     * @param {?} time
     * @param {?} timeUnit
     * @return {?}
     */
    function (time, timeUnit) {
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
    };
    TimeFormatterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'timeFormatter'
                },] }
    ];
    return TimeFormatterPipe;
}());
export { TimeFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3BpcGVzL3RpbWUtZm9ybWF0dGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRDtJQUFBO0lBbUJBLENBQUM7Ozs7OztJQWRHLHFDQUFTOzs7OztJQUFULFVBQVUsSUFBWSxFQUFFLFFBQWtCO1FBQ3RDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNkLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNoQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQ7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQzs7Z0JBakJKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsZUFBZTtpQkFDeEI7O0lBaUJELHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUaW1lVW5pdH0gZnJvbSAnLi4vbW9kZWxzL3RpbWUtdW5pdC5lbnVtJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICd0aW1lRm9ybWF0dGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lRm9ybWF0dGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHRpbWU6IG51bWJlciwgdGltZVVuaXQ6IFRpbWVVbml0KTogYW55IHtcbiAgICAgICAgaWYgKHRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aW1lVW5pdCkge1xuICAgICAgICAgICAgY2FzZSBUaW1lVW5pdC5IT1VSOlxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQudXRjKHRpbWUgKiAzNjAwICogMTAwMCkuZm9ybWF0KCdISCcpO1xuICAgICAgICAgICAgY2FzZSBUaW1lVW5pdC5NSU5VVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudC51dGModGltZSAqIDYwICogMTAwMCkuZm9ybWF0KCdtbScpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHN1Y2ggdGltZSB1bml0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==