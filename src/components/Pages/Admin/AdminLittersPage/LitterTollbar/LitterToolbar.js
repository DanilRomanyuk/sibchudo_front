import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import {BASE_URL} from "../../../../../const";
import "./LitterToolbar.css";

class LitterToolbar extends Component {
    constructor(props) {
        super(props);
        this.deleteLitter = this.deleteLitter.bind(this);
    }

    render() {
        return (
            <div className={"litter_toolbar"}>
                <div className={"color_green"} onClick={() => {
                    this.props.openEditModal(this.props.litter);
                }}><FontAwesomeIcon icon={faEdit}/></div>
                <div onClick={this.deleteLitter} className={"color_red"}><FontAwesomeIcon icon={faTrash}/></div>
            </div>
        );
    }

    deleteLitter() {
        console.log(this.props);
        let warning = "Вы уверены, что хотите удалить помет " + this.props.litter.letter + " и всех котят в нем? Будут удалены: " + this.props.litter.cats.map(cat => cat.name).join(", ");
        let conf = window.confirm(warning);
        if (conf) {
            axios.post(BASE_URL + "/api/litter/" + this.props.litter.id + "/delete")
                .then(res => {
                    this.props.handler();
                })
        }
    }
}

export default LitterToolbar;
