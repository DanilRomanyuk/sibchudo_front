import React, {Component} from "react";

class CatColor extends Component {
    render() {
        let colorCode = "...";
        if (this.props.color) {
            let entries = [];
            for (let field in this.props.color) {
                if (this.props.color.hasOwnProperty(field) && field !== "id") {
                    entries.push(this.props.color[field]);
                }
            }
            colorCode = entries.filter(field => field).map(field => field.code).join(".");
        }
        return (
            <>{colorCode}</>
        );
    }
}

export default CatColor;