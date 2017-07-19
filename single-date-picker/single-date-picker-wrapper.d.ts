import * as React from 'react';
export declare class SingleDatePickerWrapper extends React.Component<any, any> {
    private ngComponent;
    constructor(props: any);
    updateReactDateFromNg(date: any): void;
    onDateChange(date: any): void;
    onFocusChange({focused}: any): void;
    createState(): any;
    render(): any;
}
