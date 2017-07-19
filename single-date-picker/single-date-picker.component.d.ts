import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SingleDatePickerComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    singleDatePicker: ElementRef;
    props: any;
    private date;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    value: any;
    onBlur(): void;
    writeValue(value: any): void;
    updateReactDate(date: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouchedCallback(): void;
    onChangeCallback(_: any): void;
}
