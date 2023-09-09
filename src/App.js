import InputFields from './components/InputFields';
import OutputFields from './components/OutputFields';
import './styles/App.css';

function App() {
  return (
    <div className='container'>
      <div className='block'>
        <InputFields/>
        <OutputFields/>
      </div>
    </div>
  );
}

export default App;
