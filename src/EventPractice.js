import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  // constructor(props) {
  //   super(props);
  //   // 메서드가 특정 HTML요소의 이벤트로 등록되어도 this가 컴포넌트 자신을 제대로 가리키기 위해서는 메서드를 this와 바인딩해줘야함
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value,
  //   });
  // }

  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: '',
  //   });
  // }

  // 일반함수의 this는 자신이 종속된 객체를 가리키는 반면,
  // 화살표함수의 this는 자신이 종속된 인스턴스를 가리키므로 따로 바인딩해주지 않아도 컴포넌트 자신을 가리키게 되는 듯

  handleChange = (e) => {
    this.setState({
      // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용됨
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert((this.state.username || '익명') + ' : ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        {(this.state.username || '익명') + ' : ' + this.state.message} <br />
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          // onChange={(e) => this.setState({ message: e.target.value })}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          // onChange={(e) => this.setState({ message: e.target.value })}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          // onClick={() => {
          //   alert(this.state.message);
          //   this.setState({ message: '' });
          // }}
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
