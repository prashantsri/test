/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var NgxMaterialTimepickerEventService = /** @class */ (function () {
    function NgxMaterialTimepickerEventService() {
        this.backdropClickSubject = new Subject();
        this.keydownEventSubject = new Subject();
    }
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "backdropClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this.backdropClickSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxMaterialTimepickerEventService.prototype, "keydownEvent", {
        get: /**
         * @return {?}
         */
        function () {
            return this.keydownEventSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NgxMaterialTimepickerEventService.prototype.dispatchEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.type) {
            case 'click':
                this.backdropClickSubject.next((/** @type {?} */ (event)));
                break;
            case 'keydown':
                this.keydownEventSubject.next((/** @type {?} */ (event)));
                break;
            default:
                throw new Error('no such event type');
        }
    };
    NgxMaterialTimepickerEventService.decorators = [
        { type: Injectable }
    ];
    return NgxMaterialTimepickerEventService;
}());
export { NgxMaterialTimepickerEventService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerEventService.prototype.backdropClickSubject;
    /**
     * @type {?}
     * @private
     */
    NgxMaterialTimepickerEventService.prototype.keydownEventSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUFBO1FBR1kseUJBQW9CLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUQsd0JBQW1CLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7SUF1QnhFLENBQUM7SUFyQkcsc0JBQUksNERBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJEQUFZOzs7O1FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7Ozs7O0lBRUQseURBQWE7Ozs7SUFBYixVQUFjLEtBQWlDO1FBQzNDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxtQkFBWSxLQUFLLEVBQUEsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQWUsS0FBSyxFQUFBLENBQUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNWO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7O2dCQXpCSixVQUFVOztJQTJCWCx3Q0FBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGlDQUFpQzs7Ozs7O0lBRTFDLGlFQUFrRTs7Ozs7SUFDbEUsZ0VBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJFdmVudFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBiYWNrZHJvcENsaWNrU3ViamVjdDogU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSBrZXlkb3duRXZlbnRTdWJqZWN0OiBTdWJqZWN0PEtleWJvYXJkRXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGdldCBiYWNrZHJvcENsaWNrKCk6IE9ic2VydmFibGU8TW91c2VFdmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZHJvcENsaWNrU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXQga2V5ZG93bkV2ZW50KCk6IE9ic2VydmFibGU8S2V5Ym9hcmRFdmVudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlkb3duRXZlbnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YmplY3QubmV4dCg8TW91c2VFdmVudD5ldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrZXlkb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLmtleWRvd25FdmVudFN1YmplY3QubmV4dCg8S2V5Ym9hcmRFdmVudD5ldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gc3VjaCBldmVudCB0eXBlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==