import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

//이 habits라는 컴포넌트 안에 전체적인 데이터가 들어있기 때문에 데이터가 삭제되거나 추가되거나 변경되는 경우,
// 이 컴포넌트 안에서 수정하는 로직들을 가지고 있어야합니다.
// 한 마디로 데이터를 가지고 있는 곳이 내가 이 데이터를 어떻게 수정하면 되는지 잘 알고 있는 최고의 장소이기 때문에
// 여기에서 처리해주는 것이 가장 좋습니다.
class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  // 숫자를 증가하고 감소한다는 것은 어떤 특정한 habit의 count를 증가하고 감소하는 거기 때문에
  //인자로는 어떤 특정한 habit을 전달받으면 그 habit에 해당하는 count를 증가해주면 되겠죠.
  handleIncrement = (habit) => {
    //PureComponents 적용전 코드
    // const habits = [...this.state.habits]; //habits의 배열을 하나씩 복사해 오는 것.
    // const index = habits.indexOf(habit); //arr.indexOf(searchElement)
    // habits[index].count++;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; //새로운 habit를 리턴, 기존의 habit에 있는 key와 value들이 하나하나씩 만들어진다. / 동일한 새로운 오브젝트가 만들어진다.
      }
      return item;
    });
    this.setState({ habits }); //key와 value의 명칭이 같은 경우 하나로 작성해도 괜찮다. {habits:habits}= {habits} /value의 habits은 로컬 변수를 가르킨다.
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count; // 좋지 못한 코드
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id); //item.id와 habit.id의 값이 다를때 배열을 남기고 새로운 배열로 반환
    this.setState({ habits });
  };

  handleAdd = (name) => {
    console.log('test: ' + name);
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: (habit.count = 0) };
      }
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    // console.log(this.state.habits.filter((item) => item.count > 0).length);
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
export default App;
