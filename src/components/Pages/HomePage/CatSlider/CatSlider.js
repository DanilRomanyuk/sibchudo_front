import React, {Component} from "react";
import Axios from "axios";
import CatPreview from "../../../BaseElements/Cat/CatPreview/CatPreview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Img from 'react-image';
import {BASE_URL} from "../../../../const";


class CatSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {cats: []};
    }

    loadCats() {
        let self = this;
        Axios.post(BASE_URL + "/api/cat/get", {limit: 5}).then(
            function (data) {
                self.setState({cats: data.data});
                console.log(self.state);
            }
        );
    }

    componentDidMount() {
        this.loadCats();
    }

    render() {
        return (
            <div>
                <Carousel
                    showThumbs={false}>

                    {/*<div><img src={"http://placekitten.com/g/200/200"}/></div>*/}
                    {/*<div><img src={"http://placekitten.com/g/200/200"}/></div>*/}
                    {/*<div><img src={"http://placekitten.com/g/200/200"}/></div>*/}
                    {/*<div>123</div>*/}
                    {this.state.cats.map(cat => <div><CatPreview key={cat.id} cat={cat}/></div>)}
                    {/*{this.state.cats.map(cat => <img src={cat.avatar.destination}/>)}*/}
                </Carousel>
            </div>
        );
    }
}

export default CatSlider;