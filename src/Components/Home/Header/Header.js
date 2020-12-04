import React, { useState } from 'react';
import logos from '../../../logos/plain-white-background.jpg';
import logos1 from '../../../logos/background-circle2-new.png';
import './Header.css';
import Popup from '../Popup/Popup';

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    // const [isOpen, setOpen] = useState(false)
    return (

        <main 
        
            style={{ height: '500px' }} className="row d-flex align-items-center"
        
        
        >
            <div className="col-md-4 offset-md-2">
                <h1 style={{ color: '#3A4256' }}>
                    
                    Clarify Your <span>Doubts</span>  <br /> in your language. 
                    
                </h1>

                <button className="btn btn-dark">
                    
                    Hire Us
                    
                </button>
            </div>
           
		
            <div className="col-md-6 parent">
                <img 
                
                    style={{ width: '400px', height: '350px' }} src={logos1} alt="" className="image1 mb-5"
                
                />
                <img 
                
                    style={{ width: '370px', height: '350px' }} src={logos1} alt="" className="image2" 
                
                />
                <img 
                
                    onClick={openModal} style={{width:'330px',height:'290px'}} src={logos} alt="" className="image3 img-fluid border rounded mb-5"
                
                />
                <Popup modalIsOpen={modalIsOpen} closeModal={closeModal}></Popup>
            </div>
            <br/>
           
        
        </main>
        

    );
};

export default Header;