import React, {Component} from "react";
import Axios from "axios";
import SelectForField from "../SelectForField";
import {API} from "../../../../../const";

class TitleSelect extends Component {
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
        Axios.post(API.TITLE).then((response) => {
            this.setState({
                options: response.data.map((title) => {
                    return {value: title.id, label: title.name_ru}
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

export default TitleSelect;