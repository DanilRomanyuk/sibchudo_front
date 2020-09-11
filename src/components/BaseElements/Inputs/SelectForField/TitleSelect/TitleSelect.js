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
        Axios.get(API.TITLE).then((response) => {
            let options = response.data.map((title) => {
                return {value: title.id, label: title.nameRU}
            });
            options.unshift({value: null, label: "Не указан"})
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

export default TitleSelect;