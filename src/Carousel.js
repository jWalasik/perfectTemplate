import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      current: 0,
      isNext: true
    }
  }
  render(){
    return (
      <div className='carousel'>
        <h2>WE'RE UNIQUE</h2>
        <button>FIND OUT HOW UNIQUE</button>
        <div className='carousel__buttons'>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>        
    )
  }
}

export default Carousel