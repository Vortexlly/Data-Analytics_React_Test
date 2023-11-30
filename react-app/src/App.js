import './App.css';
import TrialItem from "./Components/Trial/TrialItem";
import { trialData1, trialData2, trialData3 } from './Components/Trial/trialData';

function App() {


  return (
    <main>
      <section className="trial">
        <TrialItem data={trialData1}/>
        <TrialItem data={trialData2}/>
        <TrialItem data={trialData3}/>
      </section>
    </main>
  );
}

export default App;
