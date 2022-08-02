import React, { Component } from 'react';

class Counter extends Component {
  //   // 클래스 컴포넌트에서 state 사용하기
  //   constructor(props) {
  //     // 리액트 Component 클래스의 생성자 함수 호출 - 필수
  //     super(props);
  //     // state 초깃값 설정하기 - 객체 형식
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  // 위 내용은 간략하게 아래와 같이 적을 수 있음
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                alert('방금 두번째 setState가 호출됐어!');
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
