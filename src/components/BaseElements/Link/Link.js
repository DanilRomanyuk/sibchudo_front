import React, {Component} from "react";
import './Link.css';

class Link extends Component {
    render() {
        let classes = (this.props.classes) ? this.props.classes + " link" : "link";
        return (<a className={classes} href={this.props.url}>{this.props.children}</a>)
    }
}

export default Link