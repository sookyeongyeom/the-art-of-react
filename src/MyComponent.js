import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   // 위처럼 파라미터에서도 비구조화 가능
//   // 비구조화 할당문법
//   //   const { name, children } = props;
//   return (
//     <div>
//       안녕! 내 이름은 {name}야!
//       <br />
//       포뇨는 {children}하고 울엉
//       <br />
//       내가 제일 좋아하는 숫자는 {favoriteNumber}이야
//     </div>
//   );
// };

import React, { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: '초코',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕! 내 이름은 {name}야!
        <br />
        포뇨는 {children}하고 울엉
        <br />
        내가 제일 좋아하는 숫자는 {favoriteNumber}이야
      </div>
    );
  }
}

// // 해당 props가 전달되지 않은 경우
// MyComponent.defaultProps = {
//   name: '초코',
// };

// // 해당 props가 다른 타입일 시 콘솔에 경고 출력
// // isRequired - 해당 props가 전달되지 않았을 시 콘솔에 경고 출력
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
