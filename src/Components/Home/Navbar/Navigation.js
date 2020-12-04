import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logos from "../../../logos/coursify.png";
const Navigation = () => {
    return (
        <div>
             <Navbar bg="none" >
                    <Navbar.Brand href="#home" style={{ marginLeft: '140px' }}>

                        <img style={{ width: '150px', marginLeft:'70px' }}
                            src={logos}

                            alt="coursify logo"
                        />
                    </Navbar.Brand >

                    <Nav className="header mt-4" >
                        <Nav.Link style={{ marginLeft: '200px', color: 'black', fontWeight:'bold' }} to="/home">

                            Live Classes
                        
                        </Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black', fontWeight:'bold' }}>
                            
                            Video Library
                            
                        </Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black', fontWeight:'bold' }}>
                            
                            Course
                            
                        </Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black', fontWeight:'bold' }}>
                            
                            Book
                            
                        </Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black', fontWeight:'bold' }}>
                            
                            Board

                        </Nav.Link>
                        <Nav.Link style={{ marginLeft: '20px', color: 'black', fontWeight:'bold' }}>
                            
                            Exam
                            
                        </Nav.Link>
                       
                        
                    </Nav>

                </Navbar>
              
        </div>
    );
};

export default Navigation;