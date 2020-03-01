import React, {Component} from "react";
import MainRouter from "./MainRouter";
import "./App.css";

export const ModalContext = React.createContext({
    openModal: () => {
    },
    closeModal: () => {
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(content, classes) {

    }

    closeModal() {

    }

    render() {
        return (
            <div>
                <ModalContext.Provider value={{openModal: this.openModal, closeModal: this.closeModal}}>
                    <MainRouter/>

                    {/*<Modal*/}
                    {/*    open={this.state.isOpenModal}*/}
                    {/*    onClose={this.closeModal}*/}
                    {/*    styles={modalStyle} center*/}
                    {/*    closeIconSvgPath={closeIconPath}>*/}
                    {/*    <div className={modalClasses}>*/}
                    {/*        {this.state.modalContent}*/}
                    {/*    </div>*/}
                    {/*</Modal>*/}
                </ModalContext.Provider>

            </div>
        );
    }
}

export default App;