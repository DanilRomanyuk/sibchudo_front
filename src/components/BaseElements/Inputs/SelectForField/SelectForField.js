import React, {Component, Fragment} from "react";
import Select from "react-select";
import {ErrorMessage} from "formik";
import "./SelectForField.css";
import Loader from "react-loader-spinner";
import defaultCatImage from "../../../Pages/CatPage/assets/default-cat.jpg";

class SelectForField extends Component {
    render() {
        return (
            <Fragment>
                {this.props.options ? <Select
                    className={"form-select"}
                    isSearchable={true}
                    placeholder={this.props.placeholder}
                    options={this.props.options}
                    name={this.props.field.name}
                    value={this.props.options ? this.props.options.find(option => option.value === this.props.field.value) : ''}
                    onChange={(option) => this.props.form.setFieldValue(this.props.field.name, option.value)}
                /> : <Loader unLoader={defaultCatImage} type={"ThreeDots"} height={40}/>}
                <ErrorMessage
                    name={this.props.field.name}
                    component="div"/>
            </Fragment>


        );
    }
}

export default SelectForField;
