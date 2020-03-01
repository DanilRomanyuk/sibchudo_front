import React, {Component, Fragment} from "react";
import {ErrorMessage} from "formik";
import "./InputForField.css"

class InputForField extends Component {
    render() {
        return (
            <Fragment>
                <input
                    className={"form-input"}
                    placeholder={this.props.placeholder}
                    name={this.props.field.name}
                    value={this.props.field.value}
                    onChange={(event) => this.props.form.setFieldValue(this.props.field.name, event.target.value)}
                />
                <ErrorMessage
                    name={this.props.field.name}
                    component="div"/>
            </Fragment>
        );
    }
}

export default InputForField;