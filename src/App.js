import './App.css';
import Timer from './Timer.js'


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      
      
      <div className='wrapper'>
        
        <div className='timer-container'>
          <h1>FIRST TIMER</h1>
          <Timer time={10000} step={1000}  autostart />
        </div>

        <div className='timer-container'>
          <h1>SECOND TIMER</h1>
          <Timer time={20000} step={2000}  />
        </div>
        
      </div>
    </div>
  );
}

export default App;
