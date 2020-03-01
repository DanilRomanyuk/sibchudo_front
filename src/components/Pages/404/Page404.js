import React, {Component} from "react";
import AbstractPage from "../AbstractPage/AbstractPage";
import TitleH2 from "../../BaseElements/TitleH2/TitleH2";
import Button from "../../BaseElements/Button/Button";

class Page404 extends Component {
    render() {
        return (
            <AbstractPage title={"Ошибка 404"}>
                <TitleH2 text={"Упс... Ничего не найдено"}/>
                <p>По данному адресу ничего нет, проверьте правильность введенного адреса</p>
                <Button color={"green"} href={"/"}>На главную страницу</Button>
            </AbstractPage>
        );
    }
}

export default Page404;