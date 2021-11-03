import './App.css';
import MainCard from './components/MainCard';
import Card from './components/Card';
import useFetch from './useFetch'
import { useState } from 'react';
import { data } from './data.js'

function App() {

  const [ state, setCurrentState ] = useState('daily')
  //const { error, data, isPendiing } = useFetch("http://localhost:8000/data")
  
  
  const imgs = {
    'Work': 'images/icon-work.svg',
    'Play': 'images/icon-play.svg',
    'Study': 'images/icon-study.svg',
    'Exercise': 'images/icon-exercise.svg',
    'Social': 'images/icon-social.svg',
    'Self Care': 'images/icon-self-care.svg'
  }

  const colors = {
    'Work': 'hsl(15, 100%, 70%)',
    'Play': 'hsl(195, 52%, 52%)',
    'Study': 'hsl(348, 100%, 68%)',
    'Exercise': 'hsl(145, 58%, 55%)',
    'Social': 'hsl(264, 64%, 52%)',
    'Self Care': 'hsl(43, 84%, 65%)' 
  }

  return (
    <div className="App">
      <MainCard state={state} setCurrentState={setCurrentState}></MainCard>
      
      { data && data.map((elm)=>(
        <Card key={elm['title']} 
              card_type={elm['title']} 
              img={imgs[elm['title']]}
              color={colors[elm['title']]}
              data={elm}
              currentState={state}>
        </Card>
        
      ))}
  
    </div>
  );
}

export default App;
