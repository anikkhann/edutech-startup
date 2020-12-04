import React, {useState} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')



const Popup = ({modalIsOpen, closeModal}) => {
   
        const [isOpen, setOpen] = useState(false);
        
            closeModal();
        
    return (
        <div>
             <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
               

               {/* <iframe width="600" height="350" src="https://www.youtube.com/embed/e7T5cIOxFBM" frameborder="0" allowfullscreen> */}

              
            </Modal>
        </div>
    );
};

export default Popup;