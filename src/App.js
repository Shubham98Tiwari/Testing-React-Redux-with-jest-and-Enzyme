import React, {Component} from 'react';
import Header from './component/header'; // import Header
import './app.scss'; // import app.scss file
import Healine from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import {connect} from 'react-redux'
import {fetchPosts} from './actions'

const tempArr = [{
  fName: 'Shubham',
  lName: 'Tiwari',
  email: 'tiwarishubh1997@gmail.com',
  age: 22,
  onlineStatus: true
}]

class App extends Component {

  constructor(props) {
    super(props);
    // binding fetch method as we are passing it in component
    this.fetch = this.fetch.bind(this);
  }

  

  //fetch method
  fetch(){
    // dispatch action
    this.props.fetchPosts();
  }

  render() {
    const {posts} = this.props;

    // SharedButton props
    const configButton = {
      buttonText: 'Get Posts',
      eventEmit: this.fetch
    }

    return (
      <div className="App">
        <header className="App-header">
          <Header /> {/* use Header */}
        </header>
        <section className="main">
          <Healine header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
          {/* get post button */}
          <SharedButton {...configButton}/>

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
