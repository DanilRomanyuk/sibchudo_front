import React, {Component} from "react";
import Axios from "axios";
import CatPreview from "../../../BaseElements/Cat/CatPreview/CatPreview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {API} from "../../../../const";
import "./CatSlider.css";

class CatSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {cats: []};
    }

    loadCats() {
        let self = this;
        Axios.post(API.CAT(), {limit: 5}).then(
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
                <Carousel className={""}
                          showThumbs={false}>
                    {this.state.cats.map(cat => <div className={"cat_slider_block"}><CatPreview key={cat.id} cat={cat}/>
                    </div>)}
                </Carousel>
            </div>
        );
    }
}

export default CatSlider;
