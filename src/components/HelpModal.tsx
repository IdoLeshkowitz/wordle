//@ts-ignore
import {ModalContext} from "../providers/modal-context";
import React, {ReactNode, ReactElement, useContext} from "react";


interface Props{
toggleModal:()=>void;
}

const HelpModal = (props:any) => {
    const {setModalActive} = props;
    const onCloseModal = () => {
        setModalActive(false);
    }
        return (
            <>
                <div className='modal-container active' tabIndex={0}>
                    <div className="modal-content">
                        <button onClick={onCloseModal} className="modal-content-escape_btn" >X</button>
                        <p className="modal-content-description">game instructions</p>
                    </div>
                </div>
            </>
        )
}

export default HelpModal;