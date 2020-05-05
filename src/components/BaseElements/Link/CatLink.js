import React, {Component} from "react";
import './CatLink.css';
import {Link} from "react-router-dom";

class CatLink extends Component {
    render() {
        let className = this.props.className ? this.props.className + " link" : "link";
        let target = this.props.target ? this.props.target : "";
        if (this.props.ext) {
            return (
                <a href={this.props.url} className={className} target={target}>
                    {this.props.children}
                </a>
            )
        } else {
            return (
                <Link to={this.props.url} className={className} target={target}>
                    {this.props.children}
                </Link>
            )
        }
    }
}

export default CatLink
