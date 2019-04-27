import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      backgrounds: [
        require('../src/images/placeholder1.jpg'),
        require('../src/images/placeholder2.jpg'),
        require('../src/images/placeholder3.jpg')
      ],
      heads: [
        "WE'RE UNIQUE",
        "WE'RE UNIQUE2",
        "WE'RE UNIQUE3"
      ],
      buttons: [
        "FIND OUT HOW UNIQUE",
        "FIND OUT HOW UNIQUE2",
        "FIND OUT HOW UNIQUE3"
      ],
      current: 0,
      isNext: true
    }
    this.componentDidUpdate = () => {
      
    }
    
    this.handleClick = (e) => {
      this.setState({index: e.target.value})
    }
    this.nextSlide = () => {
      let indexCopy = this.state.index;
      this.setState({index: indexCopy===this.state.backgrounds.length-1 ? 0 : indexCopy+1})
    }
    this.prevSlide = () => {
      let indexCopy = this.state.index;
      this.setState({index: indexCopy===0 ? 2 : indexCopy-1})
    }
    
  }
  render(){
    const url = this.state.backgrounds[this.state.index];
    const head = this.state.heads[this.state.index];
    const btn = this.state.buttons[this.state.index];

    return (
      <div className='carousel'>
        <h2>{head}</h2>
        <button>{btn}</button>
        <div className='carousel__buttons'>
          <button value={0} onClick={this.handleClick}></button>
          <button value={1} onClick={this.handleClick}></button>
          <button value={2} onClick={this.handleClick}></button>
        </div>
        <img className="carousel__bg" src={url} alt="background" />
        <button onClick={this.prevSlide}>previous</button>
        <button onClick={this.nextSlide}>next</button>
      </div>        
    )
  }
}

export default Carousel