import React from 'react';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import logo from '../../../logos/Globe-logo.jpg';
import logo1 from '../../../logos/videoview.webp';

const LiveClasses = () => {
    return (
        <div className="container">
             <h1 className="text-center">
                <span style={{color:'#002db3'}}> LIVE</span> <span  style={{color:'#00001a'}}>classes</span>  
            </h1>
            <br/>
            <br/>
            <br/>
            <div className ="row d-flex align-items-center justify-content-center ml-5">
                <div className="col-md-6">
                    
                       
                    
                    <div style={{display: 'block', justifyContent:'center',}}>
                        <ReactPlayer
                            width='400px'
                            height='240px'
                            marginLeft='300px'
                            border='2px solid gray'
                            controls 
                            url='https://youtu.be/6hhM3oIl6IM'
                            
                            
                        />
                    </div>

                </div>
                <div className="col-md-6">
                <div className = "d-flex" style={{}}>
                        <div>
                            <img style={{width:'40px', height:'40px'}} src={logo} alt=""/>
                        </div>
                        <div>
                            <h4>Access everywhere </h4>
                            <p>
                               Access to quality education anytime,<br/> anywhere
                                
                            </p>
                    </div>

                </div>
                <div className = "d-flex" style={{}}>
                        <div>
                            <img style={{width:'45px', height:'40px'}} src={logo1} alt=""/>
                        </div>
                        <div>
                            <h4>Expert Teachers</h4>
                            <p>
                                Unlimited access to video solution
                                
                            </p>
                    </div>

                </div>
                <div className = "d-flex" style={{}}>
                        <div>
                            <img style={{width:'45px', height:'40px'}} src={logo1} alt=""/>
                        </div>
                        <div>
                            <h4>Interactive Sessions</h4>
                            <p>
                                small group of maximum student- <br/>
                                teachers interaction
                                
                            </p>
                    </div>

                </div>
                </div>
              
                <h1 style={{color:'#002db3', marginTop:'50px'}}>FIRST CLASS FREE</h1>
                    
            </div>
                <div style={{marginLeft:'480px'}}>
                    
                    <br/>
                    <Button style={{width:'200px', borderRadius:'10px'}} variant="danger">
                        
                        Clarify your doubts now!
                    
                    </Button>
                </div>
                   
                    
        </div>
    );
};

export default LiveClasses;