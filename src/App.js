/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  const 함수 = () => {
    따봉변경(따봉 + 1);
  };

  const 제목변경 = () => {
    let copy = [...글제목];
    copy[0] = '여자코트 추천';
    글제목변경(copy);
  }

  const 제목정렬 = () => {
    let copy = [...글제목].sort();
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        <button onClick={제목변경}>첫글바꾸는버튼</button>
        <button onClick={제목정렬}>가나다순 정렬</button>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={함수}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
