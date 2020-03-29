import React, {Component} from "react";
import Axios from "axios";
import {getCatFullName} from "../../../Cat/CatName/CatName";
import SelectForField from "../SelectForField";
import {BASE_URL} from "../../../../../const";

class OwnerSelect extends Component {
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
        Axios.post(BASE_URL+'/api/owner/get').then((response) =>{
            this.setState({
                options: response.data.map((owner)=>{
                    return {value:owner.id, label: owner.name}
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

export default OwnerSelect;