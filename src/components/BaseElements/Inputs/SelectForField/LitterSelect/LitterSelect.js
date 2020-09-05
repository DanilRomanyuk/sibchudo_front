import React, {Component} from "react";
import SelectForField from "../SelectForField";
import Axios from "axios";
import {getCatFullName} from "../../../Cat/CatName/CatName";
import {BASE_URL} from "../../../../../const";

class LitterSelect extends Component {

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
        Axios.post(BASE_URL+'/api/litter/get',{order:{birthday:"desc"}}).then((response) =>{
            this.setState({
                options: response.data.map((litter)=>{
                    let label = "Помет(" + litter.letter + ") ";
                    label += (new Date(litter.birthday)).toLocaleDateString("ru");
                    label += " " + (litter.mother ? getCatFullName(litter.mother).join(" ") : "");
                    label += " " + (litter.father ? getCatFullName(litter.father).join(" ") : "");
                    return {value:litter.id, label: label}
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

export default LitterSelect;
