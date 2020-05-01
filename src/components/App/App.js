import React, {Component} from "react";
import MainRouter from "./MainRouter";
import "./App.css";
import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";

export const ModalContext = React.createContext({
    openModal: () => {
    },
    closeModal: () => {
    }
});

const modalStyle = {
    overlay: {
        'background': 'rgba(77,77,77,0.53)',
        'padding': '0'
    },
    modal: {
        'background': 'rgba(102,102,102,0.89)',
        'borderRadius': '15px',
        'padding': '56px 56px 60px 56px'
    },
    closeButton: {
        'borderRadius': '50%',
        'margin': '7px 7px 0 0',
        'border': '1px solid #B9B9B9',
        'padding': '4px',
        'cursor': 'pointer',
    }
};

const closeIconPath = <path fill="white" stroke="white"
                            d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"/>;


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
        console.log(this.state.isOpenModal);
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
                    <Modal
                        open={this.state.isOpenModal}
                        onClose={this.closeModal}
                        styles={modalStyle} center
                        closeIconSvgPath={closeIconPath}>
                        <div className={"modalContent"}>
                            {this.state.modalContent}
                        </div>
                    </Modal>
                    <MainRouter/>
                </ModalContext.Provider>

            </div>
        );
    }
}

export default App;
