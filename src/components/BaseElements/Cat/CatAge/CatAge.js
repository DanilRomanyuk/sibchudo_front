import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';

class CatAge extends Component {
    render() {
        if (this.props.birthday === null) {
            return "...";
        }
        let age = null;
        if (!this.props.withoutAge) {
            age = <>(<Moment fromNow ago date={this.props.birthday} locale={"ru"}/>)</>;
        }
        return (
            <span>
                <Moment format={"L"} date={this.props.birthday} locale={"ru"}/> {age}
            </span>
        );
    }
}

export default CatAge;
