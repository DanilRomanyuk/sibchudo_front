import React, {Component} from "react";
import LitterPreviewParents from "./LitterPreviewParents/LitterPreviewParents";
import Button from "../../Button/Button";
import "./LitterPreview.css";
import CatAvatar from "../../Cat/CatAvatar/CatAvatar";
import CatAge from "../../Cat/CatAge/CatAge";

export function openLitter(id) {
    if (id) {
        document.location.href = "/litter/" + id;
    }
}

class LitterPreview extends Component {
    render() {
        return (
            <div className={"litter_preview"}>
                <div>
                    <p>
                        <span className={"big_letter"}>"{this.props.litter.letter}" </span>
                        <CatAge birthday={this.props.litter.birthday} withoutAge/>
                    </p>
                    <LitterPreviewParents litter={this.props.litter}/>
                    <Button color={"green"} href={"/litter/"+this.props.litter.id}>Узнать подробнее</Button>
                </div>
                <div>
                    <CatAvatar cat={this.props.litter.mother}/>
                </div>
                <div>
                    <CatAvatar cat={this.props.litter.father}/>
                </div>
            </div>
        );
    }
}

export default LitterPreview;