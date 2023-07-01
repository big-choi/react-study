/* eslint-disable */
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [goodButton, setGoodButton] = useState([0, 0, 0]);
  let [modal, setModal] = useState('closed'); // 일반적으로 set~~~
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [날짜, 날짜변경] = useState(['6월 3일', '6월 25일', '6월 28일']);

  const handleGoodBtn = (index) => {
    let goodBtnArray = [...goodButton];
    goodBtnArray[index] += 1;
    setGoodButton(goodBtnArray);
  };

  const 글자변경함수 = () => {
    let copy = [...글제목];
    copy[0] = '여자코트 추천';
    글제목변경(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (title, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                modal === 'opened' ? setModal('closed') : setModal('opened');
                setTitle(index);
              }}
            >
              {title}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoodBtn(index);
                }}
              >
                👍
              </span>
              {goodButton[index]}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...글제목];
                  copy.splice(index, 1);
                  글제목변경(copy);
                }}
              >
                삭제
              </button>
            </h4>
            <p className='date'>{날짜[index]}</p>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />

      <button
        onClick={(e) => {
          if (document.querySelector('input').value == '') {
            alert('값이 비었음');
            return;
          }
          입력값변경(e.target.value);
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);

          goodButton.push(0);
          setGoodButton(goodButton);

          날짜변경(()=>{
            let copy = [...날짜];
            copy.unshift('오늘');
            return copy;
          })
        }}
      >
        글발행
      </button>

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
        modal === 'opened' ? <Modal 글제목={글제목} title={title} 글자변경함수={글자변경함수}></Modal> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글자변경함수}>글수정</button>
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
