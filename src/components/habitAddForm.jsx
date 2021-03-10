//function component로 변경
// 함수는 바로 변수에 접근이 가능하기 때문에 this를 사용하지 않는다.
// state가 없다면 함수형 컴포넌트를 만들수있다.
import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className='add-input'
        type='text'
        placeholder='Habit'
        onChange={props.onChange}
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default HabitAddForm;

//import React, { PureComponent } from 'react';
/*class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className='add-input'
          type='text'
          placeholder='Habit'
          onChange={this.props.onChange}
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
*/
