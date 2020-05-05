import React, {Component} from "react";
import AdminAbstractPage from "../AdminAbstractPage/AdminAbstractPage";
import TitleH2 from "../../../BaseElements/TitleH2/TitleH2";
import Button from "../../../BaseElements/Button/Button";
import AdminLittersTable from "./AdminLittersTable/AdminLittersTable";
import {ModalContext} from "../../../App/App";
import LitterEditForm from "./LitterEditForm/LitterEditForm";

class AdminLittersPage extends Component {
    render() {
        return (
            <AdminAbstractPage>
                <TitleH2 text={"Пометы"}/>
                <p>Здесь можно настроить список пометов</p>
                <div className={"mb_20"}>
                    <ModalContext.Consumer>{
                        modal => <Button color={"green"} onClick={()=>modal.openModal(<LitterEditForm/>)}>Добавить помет</Button>
                    }</ModalContext.Consumer>
                </div>
                <AdminLittersTable countLitterOnPage={20}/>
            </AdminAbstractPage>
        );
    }
}

export default AdminLittersPage;
