import React from 'react';
import createdData from '../../../createdData/index2';
import SubjectsInformation from '../SubjectsInformation/SubjectsInformation';
import logos1 from '../../../logos/background-circle2-new.png';
import './Subjects.css';



const Subjects = () => {
    return (
        <div>
        <h1 className="text-center" style={{ color: '#002db3' }}>
            
            Explore the subjects with us!
            
        </h1>
        
        <div className="parent3">
            <img style={{ width: '500px', height: '350px' }} src={logos1} alt="" className="image7" />
            <img style={{ width: '450px', height: '350px' }} src={logos1} alt="" className="image8" />
        </div>


        <div className="row" style={{ display: "flex", marginLeft:"220px" }}>

            {
                createdData.map(data => <SubjectsInformation data ={data}></SubjectsInformation>)
            }
        </div>
    </div>
    );
};

export default Subjects;