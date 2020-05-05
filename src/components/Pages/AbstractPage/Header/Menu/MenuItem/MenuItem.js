import React, {Component} from "react";
import './MenuItem.css';
import CatLink from "../../../../../BaseElements/Link/CatLink";

class MenuItem extends Component {
    render() {
        let className = (this.props.url === document.location.pathname) ? 'menu_link menu_link_current' : "menu_link";
        return (
            <CatLink className={className} url={this.props.url}>{this.props.content}</CatLink>
        )
    }
}

export default MenuItem
