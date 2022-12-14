//@ts-ignore
import {ModalContext} from "../providers/modal-context";
import {useContext} from "react";

const HelpModal = ({children}:any) => {
const {isOpen:isModalOpen, toggle:toggleModal}= useContext(ModalContext) ?? {}; ;
    if (isModalOpen) {
        return (
            <>
                {children}
                <div className={`modal-container ${isModalOpen && 'active'}`}>
                    <button  onClick={toggleModal}>X</button>
                    <div className="modal-content">
                        help
                    </div>
                </div>
            </>
        )
    }
    return children;
}

export default HelpModal;