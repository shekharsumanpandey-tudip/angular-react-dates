import { Component, ViewChild, forwardRef, Input } from '@angular/core';
import { SingleDatePickerWrapper } from './single-date-picker-wrapper';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
var SingleDatePickerComponent = (function () {
    function SingleDatePickerComponent() {
    }
    SingleDatePickerComponent.prototype.ngOnInit = function () {
        // Initialize props if not specified
        if (!this.props) {
            this.props = {};
        }
        // Set some default props
        this.props.ngComponent = this;
        this.props.date = this.date;
    };
    SingleDatePickerComponent.prototype.ngAfterViewInit = function () {
        var container = this.singleDatePicker.nativeElement;
        ReactDOM.render(React.createElement(SingleDatePickerWrapper, this.props, null), container);
    };
    Object.defineProperty(SingleDatePickerComponent.prototype, "value", {
        get: function () {
            return this.date;
        },
        set: function (v) {
            if (v !== this.date) {
                this.date = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    SingleDatePickerComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    SingleDatePickerComponent.prototype.writeValue = function (value) {
        if (value !== this.date) {
            // Update this angular component
            this.date = value;
            // Update react component value
            this.updateReactDate(value);
        }
    };
    SingleDatePickerComponent.prototype.updateReactDate = function (date) {
        // Initially empty. This function is replaced when react component is created with its context.
    };
    ;
    SingleDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SingleDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SingleDatePickerComponent.prototype.onTouchedCallback = function () {
        //Placeholders for callback
    };
    SingleDatePickerComponent.prototype.onChangeCallback = function (_) {
        //Placeholders for callback
    };
    return SingleDatePickerComponent;
}());
export { SingleDatePickerComponent };
SingleDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-single-date-picker',
                template: '<div #singleDatePicker></div>',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SingleDatePickerComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SingleDatePickerComponent.ctorParameters = function () { return []; };
SingleDatePickerComponent.propDecorators = {
    'singleDatePicker': [{ type: ViewChild, args: ['singleDatePicker',] },],
    'props': [{ type: Input },],
};
//# sourceMappingURL=single-date-picker.component.js.map