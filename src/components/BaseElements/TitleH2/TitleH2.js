import React, {Component} from "react";
import './TitleH2.css';

class TitleH2 extends Component {
    render() {
        return (
            <div className={"title_h2"}>
                <div className={'title_h2_lines'}>
                    <div> </div>
                </div>
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

export default TitleH2;