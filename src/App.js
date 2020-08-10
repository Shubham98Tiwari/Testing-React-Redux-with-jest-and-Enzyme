import React from 'react';
import Header from './component/header'; // import Header
import './app.scss'; // import app.scss file
import Healine from "./component/headline";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /> {/* use Header */}
      </header>
      <section className="main">
        <Healine header="Post" desc="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
