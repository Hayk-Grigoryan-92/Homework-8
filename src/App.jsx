import React from 'react';
import './App.scss';
import Modal from './component/modal';
import Navbar from './component/navbar';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Modal/>
        {/* <Navbar/> */}
      </div>
    );
  }
}

export default App;
