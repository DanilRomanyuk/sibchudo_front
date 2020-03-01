import React, {Component} from "react";
import "./CatTableCell.css";
import {Td} from 'react-super-responsive-table';

class CatTableCell extends Component {
    render() {
        return (
            <Td key={this.props.key}>
                <div className={"cat_table_cell"}>{this.props.children}</div>
            </Td>
        );
    }
}

export default CatTableCell;