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
        <SolveDoubts></SolveDoubts>
        <br/><br/><br/><br/>
        <HowItWorks></HowItWorks>
        <br/>
        <LiveClasses></LiveClasses>
        <br/>
        <AdvancePreparation></AdvancePreparation>
        <NeetPreparation></NeetPreparation>
        <br/>
        <Subjects></Subjects>
        <br/><br/>
        <AccessBooks></AccessBooks>
        <br/><br/>
        <StateBoards></StateBoards>
        <br/>
        <StudentsReview></StudentsReview>

    </div>
  );
}

export default App;
