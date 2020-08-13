import React, {Component} from 'react';
import Header from './component/header'; // import Header
import './app.scss'; // import app.scss file
import Healine from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import {connect} from 'react-redux'
import {fetchPosts} from './actions'
import { number } from 'prop-types';

const tempArr = [{
  fName: 'Shubham',
  lName: 'Tiwari',
  email: 'tiwarishubh1997@gmail.com',
  age: 22,
  onlineStatus: true
}];

// initialState
const initialState ={
  hideBtn: false
};

class App extends Component {

  constructor(props) {
    super(props);

    // define state 
    this.state = {
      ...initialState
    }
    // binding fetch method as we are passing it in component
    this.fetch = this.fetch.bind(this);
  }

  //fetch method
  fetch(){
    // dispatch action
    this.props.fetchPosts();

    // calling exampleMethod_updatesState() after fetching posts
    this.exampleMethod_updatesState();
  }

  // method for updating state
  exampleMethod_updatesState() {
    const {hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  //the example method that returns a value
  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const {posts} = this.props;

    const {hideBtn} = this.state;  //get hideBtn state


    // SharedButton props
    const configButton = {
      buttonText: 'Get Posts',
      eventEmit: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <header className="App-header">
          <Header /> {/* use Header */}
        </header>
        <section className="main">
          <Healine header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>

          {/* get post button */}
          {!hideBtn && 
            <SharedButton {...configButton}/>
          }
          
          {/* List showing  posts */}
          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (<ListItem key={index} {...configListItem}/>)
              })}
            </div>
          }
        </section>
        
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
// Connect with store
export default connect(mapStateToProps, {fetchPosts})(App);
