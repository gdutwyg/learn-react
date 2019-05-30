import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import LessonList from './LessonList/'
import Test from './Test'
import CommentApp from './Comment/CommentApp'
class App extends Component {
  render () {
    return (
      <div className="App">
        <Test />
        {/* <LessonList /> */}
        <CommentApp></CommentApp>
      </div>
    );
  }
}

export default App;
