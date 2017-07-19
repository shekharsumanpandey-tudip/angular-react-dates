import { Component, ViewChild, forwardRef, Input } from '@angular/core';
import { DateRangePickerWrapper } from './date-range-picker-wrapper';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
var DateRangePickerComponent = (function () {
    function DateRangePickerComponent() {
    }
    DateRangePickerComponent.prototype.ngOnInit = function () {
        // Initialize props if not specified
        if (!this.props) {
            this.props = {};
        }
        // Set some default props
        this.props.ngComponent = this;
        this.props.dateRange = this.dateRange;
    };
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
        var container = this.dateRangePicker.nativeElement;
        ReactDOM.render(React.createElement(DateRangePickerWrapper, this.props, null), container);
    };
    Object.defineProperty(DateRangePickerComponent.prototype, "value", {
        get: function () {
            return this.dateRange;
        },
        set: function (v) {
            if (v !== this.dateRange) {
                this.dateRange = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    DateRangePickerComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    DateRangePickerComponent.prototype.writeValue = function (rangeModel) {
        if (rangeModel !== this.dateRange) {
            // Update this angular component
            this.dateRange = rangeModel;
            // Update react component value
            this.updateReactDateRange(rangeModel);
        }
    };
    DateRangePickerComponent.prototype.updateReactDateRange = function (dateRange) {
        // Initially empty. This function is replaced when react component is created with its context.
    };
    ;
    DateRangePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateRangePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DateRangePickerComponent.prototype.onTouchedCallback = function () {
        //Placeholders for callback
    };
    DateRangePickerComponent.prototype.onChangeCallback = function (_) {
        //Placeholders for callback
    };
    return DateRangePickerComponent;
}());
export { DateRangePickerComponent };
DateRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-date-range-picker',
                template: '<div #dateRangePicker></div>',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DateRangePickerComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
DateRangePickerComponent.ctorParameters = function () { return []; };
DateRangePickerComponent.propDecorators = {
    'dateRangePicker': [{ type: ViewChild, args: ['dateRangePicker',] },],
    'props': [{ type: Input },],
};
//# sourceMappingURL=date-range-picker.component.js.map