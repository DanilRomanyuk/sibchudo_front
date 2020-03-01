import React, {Component} from "react";
import CatName from "../../../Cat/CatName/CatName";
import CatColor from "../../../Cat/CatColor/CatColor";
import "./LitterPreviewParents.css";

class LitterPreviewParents extends Component {
    render() {
        let mother = this.props.litter.mother;
        let father = this.props.litter.father;
        return (
            <div>
                <p>
                    <CatName className={"litter_preview_parents_cat_name"} cat={mother}/>
                    <br/>
                    <CatColor color={mother ? mother.color : null}/>
                </p>
                <p>
                    <CatName className={"litter_preview_parents_cat_name"} cat={father}/>
                    <br/>
                    <CatColor color={father ? father.color : null}/>
                </p>
            </div>
        );
    }
}

export default LitterPreviewParents;