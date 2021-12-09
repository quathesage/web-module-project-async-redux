import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getCoin } from '../Actions/actions';


const Coin = (props) => {

  const {coin} = props;


useEffect(() => {
  props.getCoin()
}, [])


  return(
    <div>
      <h1>Cryptocurrency</h1>
      <form>
        <input type='text' />
        <button>Search</button>
      </form>
      <div className='cryptoInfo'>
          <h2>Title</h2>
          <p>Symbol</p>
          <p>Rank</p>
          <p>Price</p>
          <p>Market Cap</p>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    coin: state.data
  }
}

export default connect(mapStateToProps, {getCoin})(Coin);