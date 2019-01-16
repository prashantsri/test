/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class NgxMaterialTimepickerEventService {
    constructor() {
        this.backdropClickSubject = new Subject();
        this.keydownEventSubject = new Subject();
    }
    /**
     * @return {?}
     */
    get backdropClick() {
        return this.backdropClickSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get keydownEvent() {
        return this.keydownEventSubject.asObservable();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dispatchEvent(event) {
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
    }
}
NgxMaterialTimepickerEventService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL3NlcnZpY2VzL25neC1tYXRlcmlhbC10aW1lcGlja2VyLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUd6QyxNQUFNLE9BQU8saUNBQWlDO0lBRDlDO1FBR1kseUJBQW9CLEdBQXdCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUQsd0JBQW1CLEdBQTJCLElBQUksT0FBTyxFQUFFLENBQUM7SUF1QnhFLENBQUM7Ozs7SUFyQkcsSUFBSSxhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWlDO1FBQzNDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxtQkFBWSxLQUFLLEVBQUEsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQWUsS0FBSyxFQUFBLENBQUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNWO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7OztZQXpCSixVQUFVOzs7Ozs7O0lBR1AsaUVBQWtFOzs7OztJQUNsRSxnRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neE1hdGVyaWFsVGltZXBpY2tlckV2ZW50U2VydmljZSB7XG5cbiAgICBwcml2YXRlIGJhY2tkcm9wQ2xpY2tTdWJqZWN0OiBTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIGtleWRvd25FdmVudFN1YmplY3Q6IFN1YmplY3Q8S2V5Ym9hcmRFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgZ2V0IGJhY2tkcm9wQ2xpY2soKTogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tkcm9wQ2xpY2tTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBrZXlkb3duRXZlbnQoKTogT2JzZXJ2YWJsZTxLZXlib2FyZEV2ZW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleWRvd25FdmVudFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrU3ViamVjdC5uZXh0KDxNb3VzZUV2ZW50PmV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2tleWRvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMua2V5ZG93bkV2ZW50U3ViamVjdC5uZXh0KDxLZXlib2FyZEV2ZW50PmV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBzdWNoIGV2ZW50IHR5cGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19