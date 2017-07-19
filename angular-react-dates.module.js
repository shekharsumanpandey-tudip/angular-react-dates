import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDatePickerComponent } from './single-date-picker/single-date-picker.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
var AngularReactDatesModule = (function () {
    function AngularReactDatesModule() {
    }
    AngularReactDatesModule.forRoot = function () {
        return {
            ngModule: AngularReactDatesModule
        };
    };
    return AngularReactDatesModule;
}());
export { AngularReactDatesModule };
AngularReactDatesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SingleDatePickerComponent,
                    DateRangePickerComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SingleDatePickerComponent,
                    DateRangePickerComponent
                ]
            },] },
];
/** @nocollapse */
AngularReactDatesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=angular-react-dates.module.js.map