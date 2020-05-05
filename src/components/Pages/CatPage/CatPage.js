import React, {Component} from "react";
import AbstractPage from "../AbstractPage/AbstractPage";
import axios from "axios";
import TitleH2 from "../../BaseElements/TitleH2/TitleH2";
import "./CatPage.css";
import Img from 'react-image';
import Loader from 'react-loader-spinner';
import defaultCatImage from "./assets/default-cat.jpg";
import CatInfo from "./CatInfo/CatInfo";
import CatName from "../../BaseElements/Cat/CatName/CatName";
import CatAvatar from "../../BaseElements/Cat/CatAvatar/CatAvatar";
import LitterPreview from "../../BaseElements/Litter/LitterPreview/LitterPreview";
import {BASE_URL} from "../../../const";

const catTemplate = {
    name: "...",
    gender: "...",
    avatar: {
        destination: ""
    },
    litter: {
        birthday: null,
        community: {
            name: "..."
        }
    }
};

class CatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.loadCat();
        }
    }

    componentDidMount() {
        this.loadCat();
    }

    render() {
        let cat;
        if (!this.state.cat) {
            cat = catTemplate;
        } else {
            cat = this.state.cat;
        }
        return (
            <AbstractPage title={cat.name}>
                <TitleH2 text={<CatName cat={cat}/>}/>
                <div className={"cat_info_container"}>
                    <CatInfo cat={cat}/>
                    <br/>
                    <CatAvatar cat={cat}/>
                </div>
                <div className={"medias"}>
                    {cat.medias ? cat.medias.map((item) => {
                        return <Img
                            src={item.destination}
                            key={item.id}
                            loader={<Loader unLoader={defaultCatImage} type={"Oval"} width={300} height={300}/>}/>
                    }) : ""}
                </div>
                <div>
                    {cat.litters ? cat.litters.map((item) => {
                        return <LitterPreview litter={item} key={item.id}/>
                    }) : ""}
                </div>
            </AbstractPage>
        );
    }

    loadCat() {
        let self = this;
        axios.post(BASE_URL + "/api/cat/" + this.props.match.params.id + "/get").then(function (result) {
            if (result.data != null) {
                self.setState({cat: result.data});
            } else {
                document.location.href = "/404";
            }
        }).catch(() => {
            document.location.href = "/404";
        });
    }
}

export default CatPage;
