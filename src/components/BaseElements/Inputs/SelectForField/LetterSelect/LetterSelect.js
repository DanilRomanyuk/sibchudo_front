import React, {Component} from "react";
import SelectForField from "../SelectForField";

class LetterSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я']
                .map(letter => ({value: letter, label: letter}))
        }
    }

    render() {
        return (
            <SelectForField
                options={this.state.options}
                {...this.props}/>
        );
    }
}

export default LetterSelect;