import React from "react";
import "./style.scss";

class Modal extends React.Component {
  state = {
    toggleModal: false,
    isActive: false
  };

  handleClick =() => {
   this.setState({toggleModal:!this.state.toggleModal})
   this.setState({isActive: !this.state.isActive})
  }

  closeModal = () =>{
    this.setState({toggleModal:false})
  }

  openModal = () => {
    this.setState({toggleModal:true})
  }


  render() {
    return (
      <div className={`modalComponent ${this.state.isActive? 'showModal':null}`}  >
        <button className="openModal" onClick={this.handleClick}>Click the modal !</button>
        {this.state.toggleModal ? (
          <div className="modalContainer" onClick={this.closeModal}>
             <div className="modal" onClick={this.openModal}>
            <h1>Hello, I am a modal!</h1>
            <button class="close-button" onClick={this.closeModal}>x</button>
          </div>
          </div>
         
        ) : null}
      </div>
    );
  }
}


export default Modal