import React, {Component} from "react";
import {faVenus, faMars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CatGender extends Component {
    render() {
        let gender = "Загрузка...";
        let icon = ""
        switch (this.props.gender) {
            case 'male':
                icon = (this.props.icons) ? <FontAwesomeIcon icon={faMars}/> : "";
                gender = " кот"
                break;
            case 'female':
                icon = (this.props.icons) ? <FontAwesomeIcon icon={faVenus}/> : "";
                gender = ' кошка';
                break;
        }

        return <>{[icon, gender]}</>
    }
}

export default CatGender;
