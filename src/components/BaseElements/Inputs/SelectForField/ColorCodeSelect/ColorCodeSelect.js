import React, {Component} from "react";
import Axios from "axios";
import SelectForField from "../SelectForField";

class ColorCodeSelect extends Component {
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
        let params = this.props.params ? this.props.params : {};
        Axios.post('/api/color_code/get', params).then((response) =>{
            this.setState({
                options: response.data.map((colorCode)=>{
                    return {value:colorCode.id, label: colorCode.name_ru + " ("+colorCode.code+")"}
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

export default ColorCodeSelect;