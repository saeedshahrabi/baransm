import React from 'react';
import { Input, IProps as IProps_Input } from '../Input/Input';
import { Number, IProps as IProps_Number } from '../Number/Number';
import { Textarea, IProps as IProps_Textarea } from '../Textarea/Textarea';
import { Select, IProps as IProps_Select } from '../Select/Select';
import { CheckBox, IProps as IProps_CheckBox } from '../CheckBox/CheckBox';
import { RadioButton, IProps as IProps_RadioButton } from '../RadioButton/RadioButton';
import { Asyncselect,IProps as IProps_ASYNCSELECT } from '../AsyncSelect/AsyncSelect';


export enum APP_FORM_CONTROL {
    INPUT = 'INPUT',
    NUMBER = 'NUMBER',
    TEXTAREA = 'TEXTAREA',
    SELECT = 'SELECT',
    CHECKBOX = 'CHECKBOX',
    RADIOBUTTON = "RADIOBUTTON",
    ASYNCSELECT = "ASYNCSELECT"
}
type TProps<T> =
    IProps_Input<T>
    | IProps_Number<T>
    | IProps_Textarea<T>
    | IProps_Select<T>
    | IProps_CheckBox<T>
    | IProps_RadioButton<T>
    | IProps_ASYNCSELECT<T>

    ;

export class FormControl<T> extends React.Component<TProps<T>> {

    controlRender() {
        const { control } = this.props;
        switch (control) {
            case APP_FORM_CONTROL.INPUT:
                return <Input {...this.props as IProps_Input<T>} />
            case APP_FORM_CONTROL.NUMBER:
                return <Number {...this.props as IProps_Number<T>} />
            case APP_FORM_CONTROL.TEXTAREA:
                return <Textarea {...this.props as IProps_Textarea<T>} />
            case APP_FORM_CONTROL.SELECT:
                return <Select {...this.props as IProps_Select<T>} />
            case APP_FORM_CONTROL.CHECKBOX:
                return <CheckBox {...this.props as IProps_CheckBox<T>} />
   
            case APP_FORM_CONTROL.RADIOBUTTON:
                return <RadioButton {...this.props as IProps_RadioButton<T>} />
            case APP_FORM_CONTROL.ASYNCSELECT:
                return <Asyncselect {...this.props as IProps_ASYNCSELECT<T>} />

            default: return null
        }
    }

    render() {
        return this.controlRender();
    }
}
