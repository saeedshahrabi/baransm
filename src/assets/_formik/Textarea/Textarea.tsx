import React from 'react';
import { Field } from 'formik';
import { FormElementBase, IFormElementBaseProps } from '../FormElementBase/FormElementBase';
import { APP_FORM_CONTROL } from '../FormControl/FormControl';

export interface IProps<T> extends IFormElementBaseProps<T> {
    control: APP_FORM_CONTROL.TEXTAREA;
    rows?: number;
}

export class Textarea<T> extends FormElementBase<T, IProps<T>>{
    protected fieldRender() {
        return <Field
            className="form-control"
            id={this.id}
            name={this.props.name}
            as="textarea"
            rows={this.props.rows}
        />
    }
}
