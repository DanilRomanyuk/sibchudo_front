import React, {Component} from "react";
import SelectForField from "../SelectForField";
import Axios from "axios";
import {BASE_URL} from "../../../../../const";

class StatusSelect extends Component {

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
        Axios.post(BASE_URL+'/api/cat/statuses/get').then((response) =>{
            this.setState({
                options: response.data.map((status)=>{
                    return {value:status.value, label: status.name_ru}
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
