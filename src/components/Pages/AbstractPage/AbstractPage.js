import React, {Component} from "react";
import "./AbstractPage.css";
import "./Pagination.css";
import Header from "./Header/Header";
import Menu from "./Header/Menu/Menu";
import TitleDescription from "./Header/TitleDescription/TitleDescription";
import Footer from "./Footer/Footer";

class AbstractPage extends Component {
    render() {
        let siteName = "Питомник «Сибирское Чудо» – Коллективный питомник сибирских кошек";
        return (<div>
                <title>{(this.props.title) ? this.props.title + " - " : ''}{siteName}</title>
                <Header>
                    <Menu/>
                    <TitleDescription/>
                </Header>
                <div className={'content'}>{this.props.children}</div>
                
                <Footer/>
            </div>

        );
    }
}

export default AbstractPage;