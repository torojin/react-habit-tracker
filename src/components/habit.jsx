import React, { PureComponent } from 'react';
//외부에서 Props로 전달받은 habit이라는 데이터를 보여주기만 하는 Component
//그래서 클릭이 발생하게 되면 내부적으로 데이터를 처리하기 보다는 외부에서 주어진,
// '+'버튼이 클릭이 되면 내 함수를 호출해! '-'버튼이 클릭하면 이 함수를 호출해!
// 라고 주어진 그 콜백함수들은 단순히 호출만 해주는 그런 컴포넌트로 만듭니다.
class Habit extends PureComponent {
  // component가 UI상에 등록이 되었을 때 사용자에게 보여질 때 호출
  // ex. 타이머 시작, 실시간 채팅 시 소켓이나 초기화 하는 부분을 여기서 처리
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  // UI상에서 내려올 때 없어질 때 지우기 전에 호출
  // ex. 타이머 중지, 실시간 채팅 시 소켓을 정리하고 리소스 지우는 부분을 여기서 처리
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }
  handleIncrement = () => {
    //this.props.propName(parameter)
    this.props.onIncrement(this.props.habit);
    // console.log(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fas fa-minus-square'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
