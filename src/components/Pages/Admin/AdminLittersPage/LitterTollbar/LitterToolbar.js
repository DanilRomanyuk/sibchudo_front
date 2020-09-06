import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';
import {API} from "../../../../../const";
import "./LitterToolbar.css";
import {litterUpdater} from "../AdminLittersPage";

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
            Axios.delete(API.LITTER(this.props.litter.id))
                .then(res => {
                    litterUpdater();
                })
        }
    }
}

export default LitterToolbar;
