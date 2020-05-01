    import React, {Component} from "react";
import AdminAbstractPage from "../AdminAbstractPage/AdminAbstractPage";
import AdminCatToolbar from "./AdminCatTollbar/AdminCatToolbar";
import AdminCatEditForm from "./AdminCatEditForm/AdminCatEditForm";
import TitleH2 from "../../../BaseElements/TitleH2/TitleH2";
import AdminCatTable from "./AdminCatTable/AdminCatTable";
import Button from "../../../BaseElements/Button/Button";
import "./AdminCatPage.css";
    import {ModalContext} from "../../../App/App";

class AdminCatsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editableCat: null,
            formState: null
        };
    }

    render() {
        return (
            <AdminAbstractPage>
                <TitleH2 text={"Кошки"}/>
                <p>Здесь можно настроить список животных</p>
                {/*<AdminCatEditForm*/}
                {/*    handler={(formState)=>{this.setState({formState:formState})}}*/}
                {/*    reset={()=>{this.setState({editableCat:null})}}*/}
                {/*    cat={this.state.editableCat}/>*/}

                <div className={"mb_20"}>
                    <ModalContext.Consumer>{
                        modal =>
                            <Button onClick={modal.openModal("JOPA")} color={"green"}>Добавить животное</Button>
                    }
                    </ModalContext.Consumer>
                </div>

                <AdminCatTable
                    formState={this.state.formState}
                    edit={(cat) => {
                        this.setState({editableCat: cat})
                    }}
                    toolbar={AdminCatToolbar}
                    countCatOnPage={30}/>
            </AdminAbstractPage>
        );
    }
}

export default AdminCatsPage;
