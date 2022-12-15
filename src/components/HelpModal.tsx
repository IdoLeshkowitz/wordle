//@ts-ignore
import {ModalContext} from "../providers/modal-context";
import {useContext} from "react";

const HelpModal = ({children}: any) => {
    const {isOpen: isModalOpen, toggle: toggleModal} = useContext(ModalContext) ?? {};

    if (isModalOpen) {
        return (
            <>
                {children}
                <div className={`modal-container ${isModalOpen && 'active'}`}>

                    <div className="modal-content">
                        <button className="modal-content-escape_btn" onClick={toggleModal}>X</button>
                        <p className="modal-content-description">game instructions</p>

                    </div>
                </div>
            </>
        )
    }
    return children;
}

export default HelpModal;