import React, {Component} from "react";
import Button from "../../../../BaseElements/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faImage, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

class AdminCatToolbar extends Component {
    render() {
        return (
            <div>
                <input onChange={(event) => {
                    let files = event.target.files;
                    if (files.length === 1) {
                        let data = new FormData();
                        data.append('avatar', files[0]);
                        axios.post("/api/cat/" + this.props.cat.id + "/avatar", data)
                            .then(res => { // then print response status
                                this.props.handler();
                            })
                    }
                }} ref={"avatarLoader"} hidden={true} type={"file"}/>
                <Button color={"green"} onClick={()=>{
                    window.scrollTo(window.pageXOffset, 0);
                    this.props.edit(this.props.cat);
                }}><FontAwesomeIcon icon={faEdit}/></Button>
                <Button color={"green"} onClick={() => {
                    this.refs.avatarLoader.click()
                }}><FontAwesomeIcon icon={faImage}/></Button>
                <Button color={"green"} onClick={()=>{
                    let conf = window.confirm("Вы уверены, что хотите удалить котика " + this.props.cat.name);
                    if(conf){
                        axios.post("/api/cat/" + this.props.cat.id + "/delete")
                            .then(res => { // then print response status
                                this.props.handler();
                            })
                    }
                }}><FontAwesomeIcon icon={faTrash}/></Button>
            </div>
        );
    }
}

export default AdminCatToolbar;