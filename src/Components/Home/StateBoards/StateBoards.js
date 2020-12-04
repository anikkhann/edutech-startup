import React, { useState } from 'react';
import createdData from '../../../createdData/index';
import StateBoardsInformation from '../StateBoardsInformation/StateBoardsInformation';
import logo1 from '../../../logos/background.png';
import './StateBoards.css';



const StateBoards = () => {

    return (
        <div>
            <h1 className="text-center" style={{ color: '#002db3' }}>
                
                State Boards
                
            </h1>
            <br />
            <h6 className="text-center">
                
                Learn your board syllabus from the best teachers with us
                
            </h6>
            <div className="parent2">
                <img style={{ width: '500px', height: '350px' }} src={logo1} alt="" className="image4" />
                <img style={{ width: '600px', height: '350px' }} src={logo1} alt="" className="image5" />
            </div>


            <div className="row" style={{ display: "flex", marginLeft:"150px" }}>



                {
                    createdData.map(data => <StateBoardsInformation data={data}></StateBoardsInformation>)
                }
            </div>
        </div>
    );
};

export default StateBoards;