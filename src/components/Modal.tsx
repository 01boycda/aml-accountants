
import type { ReactNode } from 'react'
import ReactDom from 'react-dom'

type ModalProps = {
    children: ReactNode
    handleCloseModal: () => void
}

const Modal = (props: ModalProps) => {
    return ReactDom.createPortal(
        <div className="modal-container">
            <button className='modal-underlay' onClick={props.handleCloseModal} />
            <div className="modal-content">
                {props.children}
            </div>
        </div>,
        document.getElementById("portal")!
    )
}

export default Modal