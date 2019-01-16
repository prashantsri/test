/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class AutofocusDirective {
    /**
     * @param {?} element
     * @param {?} document
     */
    constructor(element, document) {
        this.element = element;
        this.document = document;
        this.activeElement = this.document.activeElement;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(() => this.element.nativeElement.focus());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(() => this.activeElement.focus());
    }
}
AutofocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[timepickerAutofocus]'
            },] }
];
/** @nocollapse */
AutofocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
AutofocusDirective.propDecorators = {
    isFocusActive: [{ type: Input, args: ['timepickerAutofocus',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC10aW1lcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tYXRlcmlhbC10aW1lcGlja2VyL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBd0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUt6QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQU0zQixZQUFvQixPQUFtQixFQUF3QyxRQUFhO1FBQXhFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBd0MsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUN4RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLHdEQUF3RDtZQUN4RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1Asd0RBQXdEO1FBQ3hELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2FBQ3BDOzs7O1lBTGtCLFVBQVU7NENBWWlCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7OzRCQUpwRSxLQUFLLFNBQUMscUJBQXFCOzs7O0lBQTVCLDJDQUFxRDs7Ozs7SUFFckQsMkNBQW1DOzs7OztJQUV2QixxQ0FBMkI7Ozs7O0lBQUUsc0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0aW1lcGlja2VyQXV0b2ZvY3VzXSdcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCd0aW1lcGlja2VyQXV0b2ZvY3VzJykgaXNGb2N1c0FjdGl2ZTogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgYWN0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRm9jdXNBY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFRvIGF2b2lkIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3I7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIFRvIGF2b2lkIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3I7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cbn1cbiJdfQ==