import React, {Component} from "react";
import {faVenus, faMars, faVenusMars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class   CatGender extends Component {
    render() {
        let gender;
        let icon;
        switch (this.props.gender) {
            case 'male':
                icon = (this.props.icons) ? <FontAwesomeIcon key={true} icon={faMars}/> : "";
                gender = " кот"
                break;
            case 'female':
                icon = (this.props.icons) ? <FontAwesomeIcon key={true} icon={faVenus}/> : "";
                gender = ' кошка';
                break;
            default:
                icon = (this.props.icons) ? <FontAwesomeIcon key={true} icon={faVenusMars}/> : "";
                gender = 'Неизвестен';
        }

        return <>{[icon, gender]}</>
    }
}

export default CatGender;
