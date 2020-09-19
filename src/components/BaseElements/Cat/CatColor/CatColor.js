import React, {Component} from "react";

class CatColor extends Component {
    makeName(color) {

    }

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
        let colorName = '';
        if (colorCode !== "...") {
            let entries = [];
            const SHOWED_COLOR_FIELDS = ['baseColor', 'baseColorAdditional', 'code0', 'code1', 'code2', 'code3']
            for (let field in this.props.color) {
                if (this.props.color.hasOwnProperty(field) && SHOWED_COLOR_FIELDS.includes(field)) {
                    entries.push(this.props.color[field]);
                }
            }
            colorName = entries.filter(field => field).map(field => field.nameRU).join(" ");
        }
        return (
            <span
                title={this.props.onlyCode ? colorName : colorCode}>{this.props.onlyCode ? colorCode : colorName}
            </span>
        );
    }
}

export default CatColor;