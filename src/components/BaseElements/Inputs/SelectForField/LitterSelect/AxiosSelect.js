import React, {Component} from "react";
import SelectForField from "../SelectForField";
import Axios from "axios";
import {getCatFullName} from "../../../Cat/CatName/CatName";

class AxiosSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        this.loadOptions();
    }

    loadOptions(){
        Axios.post(this.props.url).then((response) =>{
            this.setState({
                options: this.props.handler
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

export default AxiosSelect;