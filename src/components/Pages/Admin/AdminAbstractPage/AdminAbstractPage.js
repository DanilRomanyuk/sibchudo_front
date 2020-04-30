import React, {Component, Fragment} from "react";
import MenuItem from "../../AbstractPage/Header/Menu/MenuItem/MenuItem";

class AdminAbstractPage extends Component {
    render() {
        return (
            <Fragment>
                <title>Админ-панель</title>
                <div className={"menu"}>
                    <div className={"menu_title"}>
                        <div>СИБИРСКОЕ ЧУДО АДМИН ПАНЕЛЬ</div>
                    </div>
                    <div className={"menu_items"}>
                        <MenuItem url={'/admin/main'} content={'Главная'}/>
                        <MenuItem url={'/admin/cats'} content={'Кошки'}/>
                        <MenuItem url={'/admin/litters'} content={'Пометы'}/>
                    </div>
                </div>
                <div className={'content'}>{this.props.children}</div>
            </Fragment>
        );
    }
}

export default AdminAbstractPage;
