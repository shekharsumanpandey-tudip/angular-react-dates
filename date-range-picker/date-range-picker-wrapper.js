var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';
var DateRangePickerWrapper = (function (_super) {
    __extends(DateRangePickerWrapper, _super);
    function DateRangePickerWrapper(props) {
        var _this = _super.call(this, props) || this;
        // React component state
        _this.state = _this.createState();
        // Bindings to angular context
        _this.ngComponent = props.ngComponent;
        _this.ngComponent.updateReactDateRange = _this.updateReactDateRangeFromNg;
        _this.onDatesChange = _this.onDatesChange.bind(_this);
        _this.onFocusChange = _this.onFocusChange.bind(_this);
        _this.ngComponent.updateReactDateRange = _this.ngComponent.updateReactDateRange.bind(_this);
        return _this;
    }
    DateRangePickerWrapper.prototype.updateReactDateRangeFromNg = function (dateRange) {
        // Update date range
        if (dateRange) {
            var startDate = dateRange.start ? moment(dateRange.start) : null;
            var endDate = dateRange.end ? moment(dateRange.end) : null;
            this.onDatesChange({ startDate: startDate, endDate: endDate });
        }
    };
    DateRangePickerWrapper.prototype.onDatesChange = function (_a) {
        var startDate = _a.startDate, endDate = _a.endDate;
        // Update this react component state
        this.setState({ startDate: startDate, endDate: endDate });
        // Update angular component container state
        var ngDateRange;
        if (startDate || endDate) {
            ngDateRange = {
                start: startDate ? startDate.toDate() : null,
                end: endDate ? endDate.toDate() : null
            };
        }
        this.ngComponent.value = ngDateRange;
    };
    DateRangePickerWrapper.prototype.onFocusChange = function (focusedInput) {
        this.setState({ focusedInput: focusedInput });
    };
    DateRangePickerWrapper.prototype.createState = function () {
        // Get date range from props
        var startDate = this.props.dateRange ? this.props.dateRange.start : null;
        var endDate = this.props.dateRange ? this.props.dateRange.end : null;
        return {
            startDate: startDate ? moment(startDate) : null,
            endDate: endDate ? moment(endDate) : null,
            focusedInput: this.props.focusedInput
        };
    };
    DateRangePickerWrapper.prototype.render = function () {
        var conf = {
            // Required
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            onDatesChange: this.onDatesChange,
            focusedInput: this.state.focusedInput,
            onFocusChange: this.onFocusChange,
            // Optional
            startDateId: this.props.startDateId,
            startDatePlaceholderText: this.props.startDatePlaceholderText,
            endDateId: this.props.endDateId,
            endDatePlaceholderText: this.props.endDatePlaceholderText,
            disabled: this.props.disabled,
            required: this.props.required,
            screenReaderInputMessage: this.props.screenReaderInputMessage,
            showClearDates: this.props.showClearDates,
            showDefaultInputIcon: this.props.showDefaultInputIcon,
            customInputIcon: this.props.customInputIcon,
            customArrowIcon: this.props.customArrowIcon,
            customCloseIcon: this.props.customCloseIcon,
            orientation: this.props.orientation,
            anchorDirection: this.props.anchorDirection,
            horizontalMargin: this.props.horizontalMargin,
            withPortal: this.props.withPortal,
            withFullScreenPortal: this.props.withFullScreenPortal,
            initialVisibleMonth: this.props.initialVisibleMonth,
            numberOfMonths: this.props.numberOfMonths,
            keepOpenOnDateSelect: this.props.keepOpenOnDateSelect,
            reopenPickerOnClearDates: this.props.reopenPickerOnClearDates,
            renderCalendarInfo: this.props.renderCalendarInfo,
            navPrev: this.props.navPrev,
            navNext: this.props.navNext,
            onPrevMonthClick: this.props.onPrevMonthClick,
            onNextMonthClick: this.props.onNextMonthClick,
            renderDay: this.props.renderDay,
            minimumNights: this.props.minimumNights,
            enableOutsideDays: this.props.enableOutsideDays,
            isDayBlocked: this.props.isDayBlocked,
            isOutsideRange: this.props.isOutsideRange,
            isDayHighlighted: this.props.isDayHighlighted,
            displayFormat: this.props.displayFormat,
            monthFormat: this.props.monthFormat,
            phrases: this.props.phrases
        };
        return React.createElement(DateRangePicker, conf);
    };
    return DateRangePickerWrapper;
}(React.Component));
export { DateRangePickerWrapper };
//# sourceMappingURL=date-range-picker-wrapper.js.map