import React from 'react';
import { Field } from 'formik';
import { FormElementBase, IFormElementBaseProps } from '../FormElementBase/FormElementBase';
import { APP_FORM_CONTROL } from '../FormControl/FormControl';

export interface IProps<T> extends IFormElementBaseProps<T> {
    control: APP_FORM_CONTROL.INPUT;
    placeholder?: string;
    type?: string;
    disabled?:boolean;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
    defaultValue?: string;
}

export class Input<T> extends FormElementBase<T, IProps<T>>{
    protected fieldRender() {
        const { name, ...rest } = this.props;
        return <Field className="form-control" id={this.id} name={name} {...rest} />
    }
}
