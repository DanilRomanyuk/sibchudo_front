import React, {Component} from "react";
import Img from "react-image";
import Loader from "react-loader-spinner";
import {faStar, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BASE_URL} from "../../../../const";

class CatMedia extends Component {
    render() {
        let destination = this.props.media.destination;
        let url = destination.startsWith("http") ? destination : BASE_URL + this.props.media.dir + destination;
        return (
            <div className={"cat_media"}>
                <Img src={url} loader={<Loader type="Oval" width={200} height={200}/>}/>
                <div className={"toolbar"}>
                    <FontAwesomeIcon color={this.props.isAvatar ? 'yellow' : 'black'} icon={faStar}
                                     onClick={() => {
                                         if (!this.props.isAvatar) {
                                             this.props.setAvatarHandler(this.props.catId, this.props.media.id)
                                         }
                                     }}/>
                    <FontAwesomeIcon color={'red'} onClick={() => {
                        this.props.deleteHandler(this.props.media.id)
                    }} icon={faTrash}/>
                </div>
            </div>);
    }
}

export default CatMedia;