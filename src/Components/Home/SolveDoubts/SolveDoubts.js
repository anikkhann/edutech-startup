import React from 'react';
import logo from '../../../logos/Globe-logo.jpg';
import logo1 from '../../../logos/videoview.webp';
import logo2 from '../../../logos/undraw_book_lover_mkck.png';
import logos1 from '../../../logos/background-circle2-new.png';
import './SolveDoubts.css';
const SolveDoubts = () => {
    return (
        <div className = "container">
            <div className ="row d-flex align-items-center justify-content-center">
                <div className = "col-md-6">
                    <div>
                        <h1>

                           <span  style={{color:'#00001a', marginLeft:'80px'}}> Solve Your doubts</span> 
                           <span  style={{color:'#002db3'}}>faster.</span> 
                           
                        </h1>
                    </div>
                    <div className = "d-flex" style={{marginLeft:'80px'}}>
                        <div>
                            <img style={{width:'45px', height:'40px'}} src={logo} alt=""/>
                        </div>
                        <div>
                            <h4>Access everywhere </h4>
                            <p>
                               Access to quality education anytime,<br/> anywhere
                                
                            </p>
                    </div>

                </div>
                <div className = "d-flex" style={{marginLeft:'80px'}}>
                        <div>
                            <img style={{width:'45px', height:'45px'}} src={logo1} alt=""/>
                        </div>
                        <div>
                            <h4>1 million+ videos </h4>
                            <p>
                              Unlimited access to video solution
                                
                            </p>
                    </div>

                </div>

            </div>
           
            <div className="col-md-6 parent6">
                <img style={{ width: '420px', height: '350px' }} src={logos1} className='image13' alt=""/>
                <img style={{ width: '400px', height: '350px' }} src={logos1} className='image14' alt=""/>

                <img style={{width:'300px', height:'300px'}} src={logo2} className="image15" alt=""/>
            </div>
            
        </div>
        </div>
    );
};

export default SolveDoubts;