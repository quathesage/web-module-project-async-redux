import axios from 'axios';

export const GET_COIN = 'GET_COIN';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';


export const getCoin = () => dispatch => {
  dispatch({type: GET_COIN});
  axios.get('https://api.coinlore.net/api/ticker/?id=90')
    .then(res => {
      dispatch({type: SUCCESS, payload: res.data})
      console.log(res)
    })
    .catch(err =>
      dispatch({type: ERROR, payload: "Content Not Found"
    }))
}