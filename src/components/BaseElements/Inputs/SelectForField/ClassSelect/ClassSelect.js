import React, {Component} from "react";
import Axios from "axios";
import SelectForField from "../SelectForField";
import {BASE_URL} from "../../../../../const";

class ClassSelect extends Component {
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
        Axios.post(BASE_URL + '/api/class/get').then((response) => {
            this.setState({
                options: response.data.map((catClass) => {
                    return {value: catClass.id, label: catClass.name_ru}
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

export default ClassSelect;