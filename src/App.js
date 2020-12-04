import './App.css';
import AccessBooks from './Components/Home/AccessBooks/AccessBooks';
import Header from './Components/Home/Header/Header';
import HowItWorks from './Components/Home/HowItWorks/HowItWorks';
import Navbar from './Components/Home/Navbar/Navigation';
import SolveDoubts from './Components/Home/SolveDoubts/SolveDoubts';
import StateBoards from './Components/Home/StateBoards/StateBoards';
import stateBoards from './Components/Home/StateBoards/StateBoards';
import Subjects from './Components/Home/Subjects/Subjects';
import SummaryOfActivities from './Components/Home/SummaryOfActivities/SummaryOfActivities';


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
        <br/><br/>
        <br/><br/>
        <HowItWorks></HowItWorks>
        {/* <SummaryOfActivities></SummaryOfActivities> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <Subjects></Subjects>
        <br/>
        <br/>
        <br/>
        <AccessBooks></AccessBooks>  
        <StateBoards></StateBoards>
        
    </div>
  );
}

export default App;
