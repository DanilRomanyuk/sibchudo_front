import React, {Component} from "react";
import TitleH2 from "../../BaseElements/TitleH2/TitleH2";
import Button from "../../BaseElements/Button/Button";
import AdminAbstractPage from "../Admin/AdminAbstractPage/AdminAbstractPage";

class Page404Admin extends Component {
    render() {
        return (
            <AdminAbstractPage title={"Ошибка 404"}>
                <TitleH2 text={"Упс... Ничего не найдено"}/>
                <p>По данному адресу ничего нет, проверьте правильность введенного адреса</p>
                <Button color={"green"} href={"/admin"}>На главную страницу</Button>
            </AdminAbstractPage>
        );
    }
}

export default Page404Admin;
