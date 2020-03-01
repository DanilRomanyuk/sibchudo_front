import React, {Component} from "react";
import AdminAbstractPage from "../AdminAbstractPage/AdminAbstractPage";
import * as Yup from "yup";
import {Field, Formik} from "formik";
import InputForField from "../../../BaseElements/Inputs/InputForField/InputForField";
import LitterSelect from "../../../BaseElements/Inputs/SelectForField/LitterSelect/LitterSelect";
import StatusSelect from "../../../BaseElements/Inputs/SelectForField/StatusSelect/StatusSelect";
import CommunitySelect from "../../../BaseElements/Inputs/SelectForField/CommunitySelect/CommunitySelect";
import GenderSelect from "../../../BaseElements/Inputs/SelectForField/GenderSelect/GenderSelect";
import OwnerSelect from "../../../BaseElements/Inputs/SelectForField/OwnerSelect/OwnerSelect";
import TitleSelect from "../../../BaseElements/Inputs/SelectForField/TitleSelect/TitleSelect";
import ClassSelect from "../../../BaseElements/Inputs/SelectForField/ClassSelect/ClassSelect";
import BreedSelect from "../../../BaseElements/Inputs/SelectForField/BreedSelect/BreedSelect";
import BaseColorSelect from "../../../BaseElements/Inputs/SelectForField/BaseColorSelect/BaseColorSelect";
import ColorCodeSelect from "../../../BaseElements/Inputs/SelectForField/ColorCodeSelect/ColorCodeSelect";
import Button from "../../../BaseElements/Button/Button";
import axios from "axios";
import CatsList from "../../CatsPage/CatsList/CatsList";
import AdminCatToolbar from "./AdminCatTollbar/AdminCatToolbar";
import AdminCatEditForm from "./AdminCatEditForm/AdminCatEditForm";

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
                Вы на странице управления котиками
                <AdminCatEditForm
                    handler={(formState)=>{this.setState({formState:formState})}}
                    reset={()=>{this.setState({editableCat:null})}}
                    cat={this.state.editableCat}/>
                <CatsList
                    formState={this.state.formState}
                    edit={(cat)=>{this.setState({editableCat:cat})}}
                    toolbar={AdminCatToolbar}
                    countCatOnPage={15}/>
            </AdminAbstractPage>
        );
    }
}

export default AdminCatsPage;