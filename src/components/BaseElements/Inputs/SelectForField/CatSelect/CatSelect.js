import React, {Component} from "react";
import SelectForField from "../SelectForField";
import Axios from "axios";
import {getCatFullName} from "../../../Cat/CatName/CatName";
import {BASE_URL} from "../../../../../const";

class CatSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        this.loadOptions();
    }

    loadOptions() {
        Axios.post(BASE_URL + '/api/cat/get').then((response) => {
            this.setState({
                options: response.data.map((cat) => {
                    return {value: cat.id, label: getCatFullName(cat).join(" ")}
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

export default CatSelect;
