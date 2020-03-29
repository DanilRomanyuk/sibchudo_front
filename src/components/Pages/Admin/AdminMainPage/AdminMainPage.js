import React, {Component} from "react";
import AdminAbstractPage from "../AdminAbstractPage/AdminAbstractPage";

class AdminMainPage extends Component {
    render() {
        return (
            <AdminAbstractPage>
                Вы на главной странице админ панели сайта питомника "Сибирское Чудо" для начала работы выберите интересующую вас вкладку
            </AdminAbstractPage>
        );
    }
}

export default AdminMainPage;