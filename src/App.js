import React from 'react';
import './App.css';
import AccessBooks from './Components/Home/AccessBooks/AccessBooks';
import AdvancePreparation from './Components/Home/AdvancePreparation/AdvancePreparation';
import Header from './Components/Home/Header/Header';
import HowItWorks from './Components/Home/HowItWorks/HowItWorks';
import LiveClasses from './Components/Home/LiveClasses/LiveClasses';
import Navbar from './Components/Home/Navbar/Navigation';
import NeetPreparation from './Components/Home/NeetPreparation/NeetPreparation';
import SolveDoubts from './Components/Home/SolveDoubts/SolveDoubts';
import StateBoards from './Components/Home/StateBoards/StateBoards';
import StudentsReview from './Components/Home/StudentsReview/StudentsReview';
import Subjects from './Components/Home/Subjects/Subjects';

function App() {
  return (
    <div>
        
        <Navbar></Navbar>
        <Header></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <SolveDoubts></SolveDoubts>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <HowItWorks></HowItWorks>
        <br/>
        <br/>
        <br/>
        <br/>
        <LiveClasses></LiveClasses>
        <br/>
        <br/>
        <br/>
        <br/>
        <AdvancePreparation></AdvancePreparation>
        <NeetPreparation></NeetPreparation>
        
        <br/>
        <br/>
        <br/>
        <Subjects></Subjects>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <AccessBooks></AccessBooks>  
        <StateBoards></StateBoards>
        <StudentsReview></StudentsReview>

    </div>
  );
}

export default App;
