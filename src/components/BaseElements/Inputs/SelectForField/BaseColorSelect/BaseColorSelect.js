import React, {Component} from "react";
import Axios from "axios";
import SelectForField from "../SelectForField";
import {BASE_URL} from "../../../../../const";

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

    loadOptions(){
        Axios.post(BASE_URL+'/api/base_color/get').then((response) =>{
            this.setState({
                options: response.data.map((baseColor)=>{
                    return {value:baseColor.id, label: baseColor.name_ru + " ("+baseColor.code+")"}
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

export default BaseColorSelect;