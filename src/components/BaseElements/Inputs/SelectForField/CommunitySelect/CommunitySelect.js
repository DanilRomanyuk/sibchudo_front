import React, {Component} from "react";
import Axios from "axios";
import SelectForField from "../SelectForField";

class CommunitySelect extends Component {
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
        Axios.post('/api/community/get').then((response) =>{
            this.setState({
                options: response.data.map((community)=>{
                    return {value:community.id, label: community.name}
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

export default CommunitySelect;