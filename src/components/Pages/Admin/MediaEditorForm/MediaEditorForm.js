import React, {Component} from "react";
import CatMedia from "./CatMedia";
import "./MediaEditorForm.css";
import Button from "../../../BaseElements/Button/Button";
import Axios from "axios";
import {API} from "../../../../const";
import Loader from "react-loader-spinner";

class MediaEditorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: null
        }
        this.deleteMedia = this.deleteMedia.bind(this);
        this.setAvatar = this.setAvatar.bind(this);
    }

    componentDidMount() {
        this.loadCat();
    }

    loadCat() {
        Axios.get(API.CAT(this.props.catId)).then(res => {
            this.setState({cat: res.data});
        })
    }

    deleteMedia(mediaId) {
        if (window.confirm("Вы уверены, что хотите удалить изображение?")) {
            Axios.delete(API.MEDIA(mediaId)).then(res => {
                this.loadCat()
            });
        }
    }

    setAvatar(catId, mediaId) {
        Axios.patch(API.SET_AVATAR(catId, mediaId)).then(res => {
            this.loadCat()
        });
    }

    render() {
        if (this.state.cat === null) {
            return <Loader type="Oval" width={200} height={200}/>
        }
        return (
            <>
                <div className={"media_control"}>
                    <Button color={'white'} onClick={() => {
                        this.refs.avatarLoader.click()
                    }}>Добавить изображения</Button>
                    <input onChange={(event) => {
                        let files = event.target.files;
                        let data = new FormData();
                        Array.from(files).forEach(file => {
                            data.append(file.name, file)
                        });
                        Axios.post(API.CAT_MEDIA(this.state.cat.id), data)
                            .then(res => {
                                this.loadCat();
                            })
                    }} ref={"avatarLoader"} hidden={true} type={"file"} multiple={true} accept={"image/*"}/>
                </div>
                {this.state.cat.media.map(
                    media => <CatMedia key={media.id}
                                       media={media}
                                       catId={this.props.catId}
                                       deleteHandler={this.deleteMedia}
                                       setAvatarHandler={this.setAvatar}
                                       isAvatar={this.state.cat.avatar && media.id === this.state.cat.avatar.id}/>
                )}
            </>
        )
    }
}

export default MediaEditorForm;