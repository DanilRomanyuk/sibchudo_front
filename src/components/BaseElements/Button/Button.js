import React, {Component} from "react";
import './Button.css';

class Button extends Component {
    render() {
        let classes = this.props.color ? 'button ' + this.props.color : 'button';
        let type = this.props.type ? this.props.type : "submit";
        let btn = <button type={type} className={classes} onClick={this.props.onClick}>{this.props.children}</button>;
        if (this.props.href) {
            btn = <a href={this.props.href}>{btn}</a>
        }
        return (btn);
    }
}

export default Button;