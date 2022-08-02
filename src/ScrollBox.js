import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    // scrollTop : 세로 스크롤바 위치 (0~350)
    // scrollHeight : 스크롤이 있는 박스 안의 div 높이 (650)
    // clientHeight : 스크롤이 있는 박스의 높이 (300)
    const { scrollHeight, clientHeight } = this.box;
    // 스크롤을 맨 아래쪽으로 내리기
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: '1px solid lightpink',
      height: 300,
      width: 300,
      overflow: 'auto',
      position: 'relative',
    };
    const innerStyle = {
      width: '100%',
      height: 650,
      background: 'linear-gradient(white, lightpink)',
    };
    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
