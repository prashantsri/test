/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(element, document) {
        this.element = element;
        this.document = document;
        this.activeElement = this.document.activeElement;
    }
    /**
     * @return {?}
     */
    AutofocusDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(function () { return _this.element.nativeElement.focus(); });
        }
    };
    /**
     * @return {?}
     */
    AutofocusDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(function () { return _this.activeElement.focus(); });
    };
    AutofocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[timepickerAutofocus]'
                },] }
    ];
    /** @nocollapse */
    AutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    AutofocusDirective.propDecorators = {
        isFocusActive: [{ type: Input, args: ['timepickerAutofocus',] }]
    };
    return AutofocusDirective;
}());
export { AutofocusDirective };
if (false) {
    /** @type {?} */
    AutofocusDirective.prototype.isFocusActive;
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.activeElement;
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBd0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQVNJLDRCQUFvQixPQUFtQixFQUF3QyxRQUFhO1FBQXhFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBd0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUN4RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFBQSxpQkFLQztRQUpHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQix3REFBd0Q7WUFDeEQsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUFBLGlCQUdDO1FBRkcsd0RBQXdEO1FBQ3hELFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQXZCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtpQkFDcEM7Ozs7Z0JBTGtCLFVBQVU7Z0RBWWlCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O2dDQUpwRSxLQUFLLFNBQUMscUJBQXFCOztJQW1CaEMseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXJCWSxrQkFBa0I7OztJQUUzQiwyQ0FBcUQ7Ozs7O0lBRXJELDJDQUFtQzs7Ozs7SUFFdkIscUNBQTJCOzs7OztJQUFFLHNDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdGltZXBpY2tlckF1dG9mb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9mb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgndGltZXBpY2tlckF1dG9mb2N1cycpIGlzRm9jdXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIGFjdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5pc0ZvY3VzQWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBUbyBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvLyBUbyBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG59XG4iXX0=