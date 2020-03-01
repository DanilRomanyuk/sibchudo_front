import React, {Component} from "react";

class CatGender extends Component {
    render() {
        let gender = "Загрузка...";
        switch (this.props.gender) {
            case 'male':
                gender =  'кот';
                break;
            case 'female':
                gender =  'кошка';
                break;
        }
        return <>{gender}</>
    }
}

export default CatGender;