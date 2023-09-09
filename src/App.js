import { useState } from 'react';
import InputFields from './components/InputFields';
import OutputFields from './components/OutputFields';
import './styles/App.css';

function App() {
  const [data, setData] = useState({
    day: '',
    month: '',
    year: ''
  })

  return (
    <div className='container'>
      <div className='block'>
        <InputFields setGlobalData={setData}/>
        <OutputFields data={data}/>
      </div>
    </div>
  );
}

export default App;
