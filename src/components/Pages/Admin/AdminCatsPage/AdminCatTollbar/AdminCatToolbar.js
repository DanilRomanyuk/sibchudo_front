import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faImage, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {BASE_URL} from "../../../../../const";
import "./AdminCatToolbar.css";

class AdminCatToolbar extends Component {
    constructor(props) {
        super(props);
        this.deleteCat = this.deleteCat.bind(this);
    }

    render() {
        return (
            <div className={"cat_toolbar"}>
                <input onChange={(event) => {
                    let files = event.target.files;
                    if (files.length === 1) {
                        let data = new FormData();
                        data.append('avatar', files[0]);
                        axios.post(BASE_URL + "/api/cat/" + this.props.cat.id + "/avatar", data)
                            .then(res => { // then print response status
                                this.props.handler();
                            })
                    }
                }} ref={"avatarLoader"} hidden={true} type={"file"}/>
                <div className={"color_green"} onClick={() => {
                    this.props.openEditModal(this.props.cat);
                }}><FontAwesomeIcon icon={faEdit}/></div>
                <div className={"color_blue"} onClick={() => {
                    this.refs.avatarLoader.click()
                }}><FontAwesomeIcon icon={faImage}/></div>
                <div onClick={this.deleteCat} className={"color_red"}><FontAwesomeIcon icon={faTrash}/></div>
            </div>
        );
    }

    deleteCat() {
        console.log(this.props);
        let conf = window.confirm("Вы уверены, что хотите удалить котика " + this.props.cat.name);
        if (conf) {
            axios.post(BASE_URL + "/api/cat/" + this.props.cat.id + "/delete")
                .then(res => { // then print response status
                    this.props.handler();
                })
        }
    }
}

export default AdminCatToolbar;
