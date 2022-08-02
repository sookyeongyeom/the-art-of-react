// import logo from './logo.svg';
// import { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
// import { Fragment } from 'react';

const App = () => {
  return <MyComponent />;
};

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
