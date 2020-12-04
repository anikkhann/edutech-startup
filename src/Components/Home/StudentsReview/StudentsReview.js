import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const StudentsReview = () => {
    return (
        <div className="container" style={{marginTop:'-200px'}} >
            <h1 className="text-center">
                <span style={{color:'#002db3'}}>See what our students have to say</span>
            </h1>
            <br/>
            <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6">
                   
                    <div  >
                        <ReactPlayer
                            width='500px'
                            height='300px'
                            border='2px solid gray'
                            controls 
                            url='https://youtu.be/KsOiPy0IeY0'
                            
                            
                        />
                    </div>

                </div>
             
            </div>
            <br/>
            <br/>
                <Button  style={{width:'300px', borderRadius:'10px', marginLeft:'35%'}} variant="danger">
                    
                    <FontAwesomeIcon icon={faDownload} /> Download The App for free
                        
                </Button>
           
               
            
        </div>
    );
};

export default StudentsReview;