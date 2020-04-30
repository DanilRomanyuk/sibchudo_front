import React, {Component} from "react";
import AdminAbstractPage from "../AdminAbstractPage/AdminAbstractPage";
import TitleH2 from "../../../BaseElements/TitleH2/TitleH2";
import Button from "../../../BaseElements/Button/Button";
import AdminLittersTable from "./AdminLittersTable/AdminLittersTable";

class AdminLittersPage extends Component{
    render() {
        return (
            <AdminAbstractPage>
                <TitleH2 text={"Пометы"}/>
                <p>Здесь можно настроить список пометов</p>
                <div className={"mb_20"}>
                    <Button color={"green"}>Добавить помет</Button>
                </div>
                <AdminLittersTable countLitterOnPage={10}/>
            </AdminAbstractPage>
        );
    }
}

export default AdminLittersPage;
