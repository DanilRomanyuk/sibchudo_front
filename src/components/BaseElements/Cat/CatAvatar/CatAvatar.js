import React, {Component} from "react";
import defaultCatImage from "./assets/default-cat.png";
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import "./CatAvatar.css";

class CatAvatar extends Component {
    render() {
        let destination = null;
        let id = this.props.cat ? this.props.cat.id : null;
        if (this.props.cat) {
            if (this.props.cat.avatar) {
                destination = this.props.cat.avatar.destination
            }
        }
        let avatar =
            <div className={"cat_avatar"}>
                <Img
                    src={destination}
                    loader={<Loader type="Oval" width={200} height={200}/>}
                    unloader={
                        <Img src={defaultCatImage}
                             loader={<Loader type="Oval" width={200} height={200}/>}/>
                    }
                />
            </div>;
        if(this.props.clickable && this.props.cat){
            avatar = <a href={"/cat/"+id}>{avatar}</a>
        }
        return (avatar);
    }
}

export default CatAvatar;
