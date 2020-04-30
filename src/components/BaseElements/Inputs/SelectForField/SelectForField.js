import React, {Component, Fragment} from "react";
import Select from "react-select";
import {ErrorMessage} from "formik";
import "./SelectForField.css";

class SelectForField extends Component {
    render() {
        return (
            <Fragment>
                <Select
                    className={"form-select"}
                    isSearchable={true}
                    placeholder={this.props.placeholder}
                    options={this.props.options}
                    name={this.props.field.name}
                    value={this.props.options ? this.props.options.find(option => option.value === this.props.field.value) : ''}
                    onChange={(option) => this.props.form.setFieldValue(this.props.field.name, option.value)}
                />
                <ErrorMessage
                    name={this.props.field.name}
                    component="div"/>
            </Fragment>


        );
    }
}

export default SelectForField;
