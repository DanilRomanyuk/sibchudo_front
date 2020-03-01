import React, {Component} from "react";

class CatStatus extends Component {
    render() {
        let status;
        switch (this.props.status) {
            case 'own':
                status = 'у хозяина';
                break;
            case 'sale':
                status = 'продается';
                break;
            case 'reserved':
                status = 'зарезервирован';
                break;
            case 'dead':
                status = 'нет в живых';
                break;
            default:
                status = 'другое';
                break;
        }
        return <>{status}</>
    }
}

export default CatStatus;