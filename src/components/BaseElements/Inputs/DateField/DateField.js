import React, {Component} from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru'

class DateField extends Component{
    render() {
        return (
            <DatePicker
                locale={ru}
                dateFormat="dd.MM.yyyy"
                className={"form-input"}
                placeholder={this.props.placeholder}
                name={this.props.field.name}
                selected={this.props.field.value ? new Date(this.props.field.value): null}
                onChange={(date) => {
                    this.props.form.setFieldValue(this.props.field.name, date);
                }}
            />);
    }
}

export default DateField;