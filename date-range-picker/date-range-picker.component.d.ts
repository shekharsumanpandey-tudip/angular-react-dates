import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class DateRangePickerComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    dateRangePicker: ElementRef;
    props: any;
    private dateRange;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    value: any;
    onBlur(): void;
    writeValue(rangeModel: any): void;
    updateReactDateRange(dateRange: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouchedCallback(): void;
    onChangeCallback(_: any): void;
}
