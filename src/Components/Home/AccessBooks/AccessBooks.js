import React from 'react';
import createdData from '../../../createdData/index3';
import logos1 from '../../../logos/background-circle2-new.png';
import AccessBooksInformation from '../AccessBooksInformation/AccessBooksInformation';
import './AccessBooks.css';

const AccessBooks = () => {
    return (
        <div>
            <h1 className="text-center">
                <span style={{ color: '#002db3' }}>Free access</span>
                <span style={{ color: '#00001a' }}> to 5000+ books</span>

            </h1>
            <h6 className="text-center" style={{ color: '#1c1d21' }}>
                Get access to virtual library of 5000+ text books <br />
                and reference books of various stateboards and competitive exams.
            </h6>

            <div className="parent4">
                <img style={{ width: '500px', height: '350px' }} src={logos1} alt="" className="image9" />
                <img style={{ width: '450px', height: '350px' }} src={logos1} alt="" className="image10" />
            </div>


            <div className="row" style={{ display: "flex", marginLeft: "150px" }}>



                {
                    createdData.map(data => <AccessBooksInformation data={data}></AccessBooksInformation>)
                }
            </div>
        </div>
    );
};

export default AccessBooks;