import React, {Component} from 'react';
import Header from './component/header'; // import Header
import './app.scss'; // import app.scss file
import Healine from "./component/headline";

const tempArr = [{
  fName: 'Shubham',
  lName: 'Tiwari',
  email: 'tiwarishubh1997@gmail.com',
  age: 22,
  onlineStatus: true
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header /> {/* use Header */}
        </header>
        <section className="main">
          <Healine header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
        </section>
      </div>
    );
  }
  
}

export default App;
