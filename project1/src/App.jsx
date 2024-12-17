import { useState } from 'react';
import './App.css';
import './index.css';
import Recorder from './components/Recorder';

function App() {
  return (
    <div>
      <h1>Build your Beats!</h1>
      <div className="display"></div>
      <div className="container">
        <div className="left">
          <h2>Drums</h2>
          <div className="drums">
            <div className="drum">
              <h3>Snare</h3>
              <div className="buttons">
                <button>Q</button>
                <button>W</button>
                <button>E</button>
              </div>
            </div>
            <div className="drum">
              <h3>Hi-Hat</h3>
              <div className="buttons">
                <button>A</button>
                <button>S</button>
                <button>D</button>
              </div>
            </div>
            <div className="drum">
              <h3>Kick</h3>
              <div className="buttons">
                <button>Z</button>
                <button>X</button>
                <button>C</button>
              </div>
            </div>
          </div>
        </div>
        <Recorder />{/* Testweise Recorder hier hin verschieben */}
        <div className="right">
          <h2>Record</h2>
           {/* Hier direkt hin verschieben */}
        </div>
      </div>
    </div>
  );
}

export default App;
