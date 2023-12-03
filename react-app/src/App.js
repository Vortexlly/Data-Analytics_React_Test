import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Promo from './Components/Promo/Promo';
import TrialItem from "./Components/Trial/TrialItem";
import { trialData1, trialData2, trialData3 } from './Components/Trial/trialData';

function App() {


  return (
    <div className="container">
      <header className='header'>
        <Nav/>
        <Promo/>
      </header>
      <main>
        <Dashboard/>
        <section className="trial">
          <TrialItem data={trialData1}/>
          <TrialItem data={trialData2}/>
          <TrialItem data={trialData3}/>
        </section>
      </main>
    </div>
  );
}

export default App;
