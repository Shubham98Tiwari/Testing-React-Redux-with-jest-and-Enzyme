import React from 'react';
import Header from './component/header'; // import Header
import './app.scss'; // import app.scss file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /> {/* use Header */}
      </header>
    </div>
  );
}

export default App;
