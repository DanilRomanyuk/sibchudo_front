import React, {Component} from "react";
import SelectForField from "../SelectForField";
import Axios from "axios";
import {getCatFullName} from "../../../Cat/CatName/CatName";
import {API} from "../../../../../const";

class CatSelect extends Component {

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
        let params = this.props.params ? this.props.params : {};
        Axios.get(API.CAT(), {
            params: params
        }).then((response) => {
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
