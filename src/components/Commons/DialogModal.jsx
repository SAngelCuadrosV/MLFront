//Modal Dialog de ReactStrap hecho en componente para ser importado en otros componentes.

import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DialogModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.stateModal}
            >
                <ModalHeader ><center>{this.props.dialogTitle}</center></ModalHeader >
                <ModalBody><center>{this.props.dialogBody}</center></ModalBody>
                <ModalFooter><center>{this.props.dialogFooter}</center></ModalFooter>
            </Modal>
        );
    }
}
export default DialogModal;
