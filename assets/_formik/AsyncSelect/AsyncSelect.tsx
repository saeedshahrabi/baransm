import React from 'react';
import { Field, FieldProps } from 'formik';
import { FormElementBase, IFormElementBaseProps } from '../FormElementBase/FormElementBase';
import AsyncSelect from 'react-select/async';
import { Props } from 'react-select/src/Select';
import { APP_FORM_CONTROL } from '../FormControl/FormControl';

export interface IProps<T> extends Omit<Props, 'name'>, IFormElementBaseProps<T> {
    control: APP_FORM_CONTROL.ASYNCSELECT;
    loadOptions:()=>any;
    isClearable:boolean;
}

export class Asyncselect<T> extends FormElementBase<T, IProps<T>>{
    protected fieldRender() {
        const { name, ...rest } = this.props;

        return <Field name={name}>
            {/* {({ form, field }: FieldProps<{ label: string, value: string }, T>) => { */}
            {({ form, field }: FieldProps<any, T>) => {

                const { setFieldValue } = form;
                const { value } = field;

                return <AsyncSelect
                    // id={this.id}
                    inputId={this.id}
                    // className="basic-multi-select"
                    // classNamePrefix="select"
                    {...field}
                    {...rest}
                    
                    onChange={(v) => {
                        if (v === null || v === undefined) { v = []; }
                        setFieldValue(name as string, v);
                    }}
                    value={value}
                // onBlur={field.onBlur}
                />
            }}
        </Field>
    }
}
