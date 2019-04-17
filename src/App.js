import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import book from './images/book.png';
import cogs from './images/cogs.png';
import shield from './images/shield.png';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="content-container">
        <Header />
        <Carousel />
        <div className='description'>
          This is the bit where you talk about how unique you are as a buisness and that you're different to all of your competitors. Your website looks the same though.
        </div>
        <div className='columns'>
          <div className='column'>
            <img src={book} alt='book' />
            <h3>ALWAYS</h3>
            <div>You could have four columns here but you won't. You'll have three, like everyone else.</div>
          </div>
          <div className='column'>
            <img src={cogs} alt='cogs' />
            <h3>THREE</h3>
            <div>Have a cog icon above one of these columns if you're really feeling especially creative.</div>
          </div>
          <div className='column'>
            <img src={shield} alt='shield' />
            <h3>COLUMNS</h3>
            <div>The perfect place to talk about your services. Because co-incidentally you have three of them.</div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
