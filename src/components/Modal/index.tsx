import { useState } from 'react';
import { Component } from 'react';
import ReactModal from 'react-modal';
import { HeaderProps } from '../../types';

// class Modal extends Component {
//   constructor(props) {
//     super(props);

//     const { isOpen } = this.props;
//     this.state = {
//       modalStatus: isOpen
//     }
//   }

export function Modal({isOpen, modalStatus } : HeaderProps) {
  
  const [isOpen, setIsOpen] = useState([modalStatus]);

  

    if (modalStatus.isOpen !== isOpen) {
      console.log(modalStatus)
      setIsOpen({ modalStatus: isOpen })
    }
  }


    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  //}
};

