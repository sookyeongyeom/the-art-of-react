// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFunc from './EventPracticeFunc';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
// import { Fragment } from 'react';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <>
        <MyComponent name="포뇨" favoriteNumber={7173}>
          응애
        </MyComponent>
        <Counter></Counter>
        <Say></Say>
        <EventPractice />
        <EventPracticeFunc />
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        {/* onClick={this.scrollBox.scrollToBottom} 형식으로 쓰게 되면 최초 로딩 시 this.scrollBox가 undefined이므로 오류 발생 */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <br />
        <br />
        <IterationSample />
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
          <button onClick={this.handleClick}>랜덤 색상</button>
        </ErrorBoundary>
      </>
    );
  }
}

// class App extends Component() {
//   render() {
//     const name = '초코';
//     const style = {
//       // camelCase
//       backgroundColor: 'lightblue',
//       color: 'white',
//       fontSize: '48px',
//       fontWeight: 'bold',
//       padding: 16,
//     };
//     return (
//       //   <div className="App">
//       //       <header className="App-header">
//       //           <img src={logo} className="App-logo" alt="logo" />
//       //           <p>
//       //               Edit <code>src/App.js</code> and save to reload.
//       //           </p>
//       //           <a
//       //               className="App-link"
//       //               href="https://reactjs.org"
//       //               target="_blank"
//       //               rel="noopener noreferrer"
//       //           >
//       //               Learn React!
//       //           </a>
//       //       </header>
//       // </div>
//       <div style={style}>
//         {name === '초코' ? <h1>{name} 안녕!</h1> : <h1>누구세용?</h1>}
//         {name === '포뇨' && <h1>나 포뇨야!</h1>}
//         <div className="react">{name || 'name은 undefined!'}</div>
//         <div
//           style={{
//             backgroundColor: 'lightpink',
//             fontSize: 20,
//           }}
//         >
//           미리 선언하지 않고 스타일 지정
//         </div>
//         <input />
//         <hr />
//         {/* 주석은 이렇게 작성하기 */}
//       </div>
//     );
//   }
// }

export default App;
