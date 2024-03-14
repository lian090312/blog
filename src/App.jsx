/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['주얼리_세공_과정1', '주얼리 세공 과정2', '주얼리 세공 과정3']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '주얼리 세공 과정';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>세공 blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) }}>👍</span> 0 </h3>
        <p>3월 14일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>3월 14일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>3월 14일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
