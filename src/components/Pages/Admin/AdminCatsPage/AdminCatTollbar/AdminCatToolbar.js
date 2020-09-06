import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faImage, faTrash} from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';
import {API} from "../../../../../const";
import "./AdminCatToolbar.css";
import {catUpdater} from "../AdminCatsPage";
import {ModalContext} from "../../../../App/App";
import MediaEditorForm from "../../MediaEditorForm/MediaEditorForm";

class AdminCatToolbar extends Component {
    constructor(props) {
        super(props);
        this.deleteCat = this.deleteCat.bind(this);
    }

    render() {
        return (
            <div className={"cat_toolbar"}>
                <div className={"color_green"} onClick={() => {
                    this.props.openEditModal(this.props.cat);
                }}><FontAwesomeIcon icon={faEdit}/></div>
                <ModalContext.Consumer>
                    {
                        modal => <div className={"color_blue"} onClick={() => {
                            modal.openModal(<MediaEditorForm type={"cats"}
                                                             cat={this.props.cat}/>
                            );
                        }}><FontAwesomeIcon icon={faImage}/></div>
                    }
                </ModalContext.Consumer>
                <div onClick={this.deleteCat} className={"color_red"}><FontAwesomeIcon icon={faTrash}/></div>
            </div>
        );
    }

    deleteCat() {
        console.log(this.props);
        let conf = window.confirm("Вы уверены, что хотите удалить котика " + this.props.cat.name);
        if (conf) {
            Axios.delete(API.CAT(this.props.cat.id))
                .then(res => { // then print response status
                    catUpdater();
                })
        }
    }
}

export default AdminCatToolbar;
