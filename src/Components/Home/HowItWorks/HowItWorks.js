import React from 'react';
import logo1 from '../../../logos/doubt.png';
import logo2 from '../../../logos/undraw_reading_time_gvg0.png';
import logo3 from '../../../logos/undraw_Graduation_ktn0.png';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';


const HowItWorks = () => {
    return (
        <div className="container">
            <h1 
            
                style={{textAlign: 'center', color:'#002db3'}}
            
            >
                
                How it Works?
                
            </h1>
            <br/>
            <div className="row offset-md-1">   

                <div className="col-md-3 text-center">

                    <img src={logo1} alt="..." className="img-thumbnail rounded-circle"/> 
                    <h6>Have a doubt?</h6>

                </div>

                <div className="col-md-1">
              
                    <FontAwesomeIcon  icon={faGreaterThan} style={{marginTop:'80px', width:'50px'}}/>

                </div>
                <div className="col-md-3 text-center">

                    <img src={logo2} alt="..." className="img-thumbnail rounded-circle"/> 
                    <h6 style={{color:'#002db3', cursor:'pointer'}}>
                        
                        Type your question <br/> OR <br/> Upload an image
                    
                    </h6>
                    <br/>
                    <Button style={{width:'200px', borderRadius:'10px'}} variant="danger">
                        
                        Clarify your doubts now!
                    
                    </Button>
                    
                </div>
                <div className="col-md-1">
              
                    <FontAwesomeIcon icon={faGreaterThan} style={{marginTop:'80px', width:'50px'}} />

                </div>
                <div className="col-md-3 text-center">
                    <img src={logo3} alt="..." className="img-thumbnail rounded-circle"/> 
                    <h6>
                        
                        Get your solution!
                        
                    </h6>
                </div>
            </div>
            
        </div>
    );
};

export default HowItWorks;