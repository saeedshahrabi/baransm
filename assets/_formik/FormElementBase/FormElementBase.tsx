import React from 'react';
import { ErrorMessage , FieldInputProps} from 'formik';
import { TextError } from '../TextError/TextError';
import { APP_FORM_CONTROL } from '../FormControl/FormControl';

export interface IFormElementBaseProps<T> {
    name: keyof T;
    label?: string;
    id?: string;
    control: APP_FORM_CONTROL;
    controlClassName?: string;
    labelClassName?: string;
    tooltip?: string;
    required?: boolean;
}

export type TFieldProps<V> = {
    [P in keyof FieldInputProps<V>]?: FieldInputProps<V>[P];
}

export abstract class FormElementBase<T, p extends IFormElementBaseProps<T>> extends React.Component<p>{
    protected id = this.props.id || this.props.name as string;

    protected labelRender() {
        if (!this.props.label) return <></>;
        return <label
            className={`${this.props.labelClassName || ''}`}
            htmlFor={this.id}
        >
            {this.props.label}
            {this.props.required ? <span className="text-danger"> *</span> : <></>}
        </label>
    }
    protected ErrorRender() {
        // return <span className="text-danger">
        //     <ErrorMessage name={this.props.name as string} />
        // </span>
        return <ErrorMessage component={TextError} name={this.props.name as string} />
    }
    protected abstract fieldRender(): JSX.Element;

    render() {
        return (
            <>
                <div className={`form-group app-${this.props.control} ${this.props.controlClassName || ''}`}>
                    {this.labelRender()}
                    {this.fieldRender()}
                    {this.ErrorRender()}
                </div>
            </>
        )
    }
}
