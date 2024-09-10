import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {

const [number, setNumber] = useState(0); // [상태값, 세터함수]
const [isnum, setIsnum] = useState(""); 
const [text, setText] = useState("");
const textRef = useRef();

const metohod = (item) => {
  setNumber(number + item);
};

useEffect(() => {
  if(number % 2 === 0) {
    setIsnum("짝수");
  }else {
    setIsnum("홀수");
  }
}, [number]);

const handleOnClick = () => {
  if(text.length < 5) {
    textRef.current.focus();
  }else{
    alert(text);
    setText("");
  }
};

const handleOnChange = (e) => {
  setText(e.target.value);
}

  return (
    <div className="App">
      <nav className='navbar'>
      <div className='nav_logo'>
        <img src='https://github.com/user-attachments/assets/0d256f86-bb9b-4d3d-98ea-56d47bc586fa'/>
      </div>

      <ul className='nav_links'>
            <li><a href="#">MAIN</a></li>
            <li><a href="#">GAME</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">EXPLORER</a></li>
            <li><a href="#" class="club">CLUB</a></li>
            <li><a href="#" class="earn">EARN</a></li>
      </ul>

      <div className='nav_btn'>
        <button class="login-btn">Login</button>
        <button class="language-btn">EN ▼</button>
      </div>
      </nav>

      {/* Simple Counter */}
      <div className='counter-main'>
        <div className='counter-container'>
          <div className='counter-header'>
            <p>Simple Counter</p> {/* counter title */}
          </div>
          <div className='counter-count'>
            <p>현재 카운트: </p>
            <p>{number}</p> {/* count 된 number값 보여주기 */}
            <p>현재 카운트는 {isnum}입니다.</p>
          </div>
          <div className='counter-btn'>
            <button onClick={()=>metohod(-100)}>-100</button>
            <button onClick={()=>metohod(-10)}>-10</button>
            <button onClick={()=>metohod(-1)}>-1</button>
            <button onClick={()=>metohod(1)}>+1</button>
            <button onClick={()=>metohod(10)}>+10</button>
            <button onClick={()=>metohod(100)}>+100</button>
          </div>
          <div className='counter-input'>
              <input ref={textRef} value={text} onChange={handleOnChange} />
              <button onClick={handleOnClick}>작성완료</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
