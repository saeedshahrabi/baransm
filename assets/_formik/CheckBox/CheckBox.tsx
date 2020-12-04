import React from 'react';
import { Field } from 'formik';
import { FormElementBase, IFormElementBaseProps, TFieldProps } from '../FormElementBase/FormElementBase';
// import RCcheckBox, { Props } from "rc-checkbox";
import { APP_FORM_CONTROL } from '../FormControl/FormControl';
// interface IFieldProps{
//     [p in keyof FieldInputProps]: any;
// }

// Omit<Props, 'name'>,
export interface IProps<T> extends Omit<TFieldProps<boolean>, 'name'>, IFormElementBaseProps<T> {
    control: APP_FORM_CONTROL.CHECKBOX;
}

export class CheckBox<T> extends FormElementBase<T, IProps<T>>{
    protected fieldRender() {
        const { name, ...rest } = this.props;
        return <>
            <Field className="form-control app-checkbox-round"
                {...rest}
                id={this.id}
                name={name}
                type="checkbox"
            />
            <label htmlFor={this.id}></label>
        </>
    }

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
