import React, {Component} from "react";
import Axios from "axios";
import SelectForField from "../SelectForField";
import {API} from "../../../../../const";

class BaseColorSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null
        }
    }

    componentDidMount() {
        this.loadOptions();
    }

    loadOptions() {
        Axios.get(API.BASE_COLOR).then((response) => {
            let options = response.data.map((baseColor) => {
                return {value: baseColor.id, label: baseColor.nameRU + " (" + baseColor.code + ")"}
            });
            if (this.props.params?.nullable) {
                options.unshift({value: null, label: "Не указан"});
            }
            this.setState({
                options: options
            });
        });
    }

    render() {
        return (
            <SelectForField
                options={this.state.options}
                {...this.props}/>
        );
    }
}

export default BaseColorSelect;