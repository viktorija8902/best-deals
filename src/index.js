import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import superagent from 'superagent';

ReactDOM.render(<App />, document.getElementById('root'));
fetchHotelData();


export function fetchHotelData(){
  const body = {
    city : 'Toronto',
    checkin : '2018-08-22',
    checkout : '2018-08-23',
    provider : 'retail'
  };

  return new Promise((resolve, reject) => {
    superagent
    .post(`https://460d7740.ngrok.io/interview/hotels`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(body)
    .end((err, res) => {
      console.log(res);
      if (err) {
        reject(err)
      } else {
        resolve(res.body);
      }
    })
  });
}