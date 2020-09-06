import React, {Component} from "react";
import SelectForField from "../SelectForField";
import Axios from "axios";
import {API} from "../../../../../const";

class StatusSelect extends Component {

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
        Axios.get(API.STATUS).then((response) => {
            this.setState({
                options: response.data.map((status) => {
                    return {value: status.id, label: status.name_ru}
                })
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

export default StatusSelect;
