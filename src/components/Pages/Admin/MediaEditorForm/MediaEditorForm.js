import React, {Component} from "react";
import CatMedia from "./CatMedia";
import "./MediaEditorForm.css";
import Button from "../../../BaseElements/Button/Button";
import Axios from "axios";
import {API} from "../../../../const";
import {catUpdater} from "../AdminCatsPage/AdminCatsPage";

class MediaEditorForm extends Component {
    render() {
        return (
            <>
                <div className={"media_control"}>
                    <Button color={'white'} onClick={() => {
                        this.refs.avatarLoader.click()
                    }}>Добавить изображения</Button>
                    <input onChange={(event) => {
                        let files = event.target.files;
                        console.log(files);
                        let data = new FormData();
                        Array.from(files).forEach(file => {
                            data.append(file.name, file)
                        });
                        Axios.post(API.CAT_MEDIA(this.props.cat.id), data)
                            .then(res => {
                                catUpdater();
                            })
                    }} ref={"avatarLoader"} hidden={true} type={"file"} multiple={true} accept={"image/*"}/>
                </div>
                {this.props.cat.media.map(media => <CatMedia key={media.id} media={media}
                                                             isAvatar={this.props.avatar && media.id === this.props.avatar.id}/>)}</>
        )
    }
}

export default MediaEditorForm;