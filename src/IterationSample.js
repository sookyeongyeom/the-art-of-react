import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '초코' },
    { id: 2, text: '밍밍' },
    { id: 3, text: '베라' },
    { id: 4, text: '냠냠' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야함
    // 이를 불변성 유지라고 하는데, 이렇게 해주어야 나중에 리액트 컴포넌트의 성능을 최적화할 수 있음
    // 그래서 아래에서 기존 배열을 변경하는 push가 아니라 새로운 배열을 만드는 concat을 사용한 것임
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  // 위와 동일한 이유로 filter를 사용함
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  // 컴포넌트 배열을 렌더링할 때는 반드시 고유한 key값을 각 컴포넌트에 지정해주어야함
  // key값은 언제나 유일해야하며, 중복될 시 렌더링 과정에서 오류가 발생함
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  // const names = ['초코', '밍밍', '베라', '냠냠'];
  // const namesList = names.map((name, idx) => <li key={idx}>{name}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
