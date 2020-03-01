import React, {Component} from "react";
import './Header.css';
import titleImage from "./assets/title_image.png"
import {Parallax} from "react-parallax";

class Header extends Component {
    render() {
        return (
            <Parallax
                bgImageAlt="title image"
                strength={300}
                bgImage={titleImage}>
                <div className={"header"}>
                    {this.props.children}
                </div>
            </Parallax>
        );
    }
}

export default Header;