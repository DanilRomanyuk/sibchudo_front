import React, {Component} from "react";

class CatStatus extends Component {
    render() {
        return <>{this.props.status.nameRU}</>
    }
}

export default CatStatus;