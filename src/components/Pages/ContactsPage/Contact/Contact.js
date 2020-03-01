import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class Contact extends Component {
    render() {
        let target = "_blank";
        if(this.props.url.indexOf("tel:")===0){
            target = "_self";
        }
        return (
            <p>
                <a href={this.props.url} target={target}>
                    <FontAwesomeIcon className={"color_green"} icon={this.props.icon}/> {this.props.text}
                </a>
            </p>
        );
    }
}

export default Contact;