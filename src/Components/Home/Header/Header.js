import React, { useState } from 'react';
import logos from '../../../logos/plain-white-background.jpg';
import logos1 from '../../../logos/background-circle2-new.png';
import './Header.css';
import Popup from '../Popup/Popup';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        //All the data of header stored in this component
        <main 
        
            style={{ height: '500px' }} className="row d-flex align-items-center"
        
        
        >
            <div className="col-md-4 offset-md-2">
                <h1 style={{ color: '#3A4256' }}>
                    
                    Clarify Your <span style={{color:'#002db3'}}>Doubts</span>  <br /> in your language. 
                    
                </h1>
                <br/>
                <Button  style={{width:'200px', borderRadius:'10px'}} variant="danger">
                    
                <FontAwesomeIcon icon={faDownload} /> Ask your doubt now
                    
                </Button>
            </div>
           
		
            <div className="col-md-6 parent">
                <img 
                
                    style={{ width: '500px', height: '350px' }} src={logos1} alt="" className="image1 mb-5"
                
                />
                <img 
                
                    style={{ width: '370px', height: '350px' }} src={logos1} alt="" className="image2" 
                
                />
               
                    <div className="image3"> 
                        <ReactPlayer
                            width='300px'
                            height='300px'
                            border='2px solid gray'
                            controls 
                            url='https://youtu.be/6hhM3oIl6IM'
                            
                            
                        />
                    </div>    
                  
                <Popup modalIsOpen={modalIsOpen} closeModal={closeModal}></Popup>
            </div>
            <br/>
           
        
        </main>
        

    );
};

export default Header;