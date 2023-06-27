/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState('closed'); // 일반적으로 set~~

  const 함수 = () => {
    따봉변경(따봉 + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
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
        <h4
          onClick={() => {
            modal === 'opened' ? setModal('closed') : setModal('opened');
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
        modal === 'opened' ? <Modal></Modal> : null
      }
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

/*
컴포넌트 사용처
1. 반복적인 HTML 축약할 때
2. 큰 페이지들
3. 자주변경되는 것들
*/

export default App;
