import React, {Component} from "react";
import './Menu.css';
import MenuItem from "./MenuItem/MenuItem";

class Menu extends Component {
    render() {
        return (
            <div className={"menu"}>
                <div className={"menu_title"}>
                    <div>СИБИРСКОЕ ЧУДО</div>
                </div>
                <div className={"menu_items"}>
                    <MenuItem url={'/'} content={'Главная'}/>
                    <MenuItem url={'/cats'} content={'Кошки'}/>
                    <MenuItem url={'/kittens'} content={'Котята'}/>
                    <MenuItem url={'/contacts'} content={'Контакты'}/>
                </div>
            </div>
        )
    }
}

export default Menu;