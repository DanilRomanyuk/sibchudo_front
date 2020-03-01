import React, {Component} from "react";
import AbstractPage from "../AbstractPage/AbstractPage";
import TitleH2 from "../../BaseElements/TitleH2/TitleH2";
import SearchRow from "../../BaseElements/SearchRow/SearchRow";
import LittersList from "./LittersList/LittersList";

class KittensPage extends Component {
    render() {
        return (
            <AbstractPage title={"Котята"}>
                <TitleH2 text={"Наши котята"}/>
                <SearchRow/>
                <LittersList countOnPage={6}/>
            </AbstractPage>
        );
    }
}

export default KittensPage;