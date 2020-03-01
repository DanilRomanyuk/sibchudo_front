import React, {Component} from "react";
import Button from "../Button/Button";
import "./SearchRow.css";

class SearchRow extends Component {
    render() {
        return (
            <div className={"search_row"}>
                {/*<Button color={"green"}>Поиск</Button>*/}
                {/*<Button color={"green"}>Фильтр</Button>*/}
                {/*<Button color={"green"}>Сортировка</Button>*/}
            </div>
        );
    }
}

export default SearchRow;