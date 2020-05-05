import React, {Component} from "react";
import './Button.css';
import CatLink from "../Link/CatLink";

class Button extends Component {
    render() {
        let classes = this.props.color ? 'button ' + this.props.color : 'button';
        let type = this.props.type ? this.props.type : "submit";
        let btn = <button type={type} className={classes} onClick={this.props.onClick}>{this.props.children}</button>;
        if (this.props.href) {
            btn = <CatLink url={this.props.href}>{btn}</CatLink>
        }
        return (btn);
    }
}

export default Button;
