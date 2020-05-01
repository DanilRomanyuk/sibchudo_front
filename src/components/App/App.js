import React, {Component} from "react";
import MainRouter from "./MainRouter";
import "./App.css";
import Modal from "react-modal";

export const ModalContext = React.createContext({
    openModal: () => {
    },
    closeModal: () => {
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            modalContent: ""
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(content, classes = "") {
        this.setState({
           modalContent: content,
           isOpenModal: true
        });
    }

    closeModal() {
        this.setState({
            modalContent: "",
            isOpenModal: false
        });
    }

    render() {
        return (
            <div>
                <ModalContext.Provider value={{openModal: this.openModal, closeModal: this.closeModal}}>
                    <MainRouter/>
                    <Modal
                        open={this.state.isOpenModal}
                        onClose={this.closeModal}
                        // styles={modalStyle}
                        >
                        <div /*className={modalClasses}*/>
                            {this.state.modalContent}
                        </div>
                    </Modal>
                </ModalContext.Provider>

            </div>
        );
    }
}

export default App;
