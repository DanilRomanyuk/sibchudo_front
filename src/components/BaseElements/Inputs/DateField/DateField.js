import React, {Component} from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru'
import {ErrorMessage} from "formik";

class DateField extends Component {
    render() {
        return (
            <><DatePicker
                autoComplete='off'
                locale={ru}
                dateFormat="dd.MM.yyyy"
                className={"form-input"}
                placeholderText={this.props.placeholder}
                name={this.props.field.name}
                selected={this.props.field.value ? new Date(this.props.field.value) : null}
                onChange={(date) => {
                    this.props.form.setFieldValue(this.props.field.name, date);
                }}
            />
                <ErrorMessage
                    className={"error_message"}
                    name={this.props.field.name}
                    component="div"/>
            </>);
    }
}

export default DateField;