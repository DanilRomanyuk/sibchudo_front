import React, {Component} from "react";
import AdminAbstractPage from "../AdminAbstractPage/AdminAbstractPage";
import TitleH2 from "../../../BaseElements/TitleH2/TitleH2";

class AdminMainPage extends Component {
    render() {
        return (
            <AdminAbstractPage>
                <TitleH2 text={"Главная"}/>
                <p>Вы на главной странице админ панели сайта питомника "Сибирское Чудо" для начала работы выберите
                    интересующую вас вкладку</p>
            </AdminAbstractPage>
        );
    }
}

export default AdminMainPage;
