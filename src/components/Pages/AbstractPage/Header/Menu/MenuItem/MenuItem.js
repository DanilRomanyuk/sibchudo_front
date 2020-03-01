import React, {Component} from "react";
import './MenuItem.css';
import Link from "../../../../../BaseElements/Link/Link";

class MenuItem extends Component {
    render() {
        let classes = (this.props.url === document.location.pathname) ? 'menu_link_current' : "";
        return (<Link classes={classes} url={this.props.url}>{this.props.content}</Link>)
    }
}

export default MenuItem