import * as React from 'react';
export declare class DateRangePickerWrapper extends React.Component<any, any> {
    private ngComponent;
    constructor(props: any);
    updateReactDateRangeFromNg(dateRange: any): void;
    onDatesChange({startDate, endDate}: any): void;
    onFocusChange(focusedInput: any): void;
    createState(): any;
    render(): any;
}
