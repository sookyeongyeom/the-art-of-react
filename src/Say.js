import React from 'react';
import { useState } from 'react';

const Say = () => {
  // 배열 비구조화 할당
  const [message, setMessage] = useState('기다리는 중...');
  const onClickEnter = () => setMessage('안녕!');
  const onClickLeave = () => setMessage('잘가!');

  const [color, setColor] = useState('lightpink');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/* prettier-ignore */}
      <button style={{ background: 'lightpink', fontWeight: 'bold' }} onClick={() => setColor('lightpink')}>핑크</button>
      {/* prettier-ignore */}
      <button style={{ background: 'lightblue', fontWeight: 'bold' }} onClick={() => setColor('lightblue')}>블루</button>
      {/* prettier-ignore */}
      <button style={{ background: 'lightgreen', fontWeight: 'bold' }} onClick={() => setColor('lightgreen')}>그린</button>
    </div>
  );
};

export default Say;
