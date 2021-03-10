import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    console.log(this.props.handleAdd);
    return (
      <div className='habits'>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {
            //this.state.habits.map(arrayItem => (
            //  <Habit propNameHabit={arrayItem}/>
            this.props.habits.map((habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement} //habit.jsx에서 '+'를 클릭하면 onClick이 this.props.onIncrement(this.props.habit)를 전달
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            ))
          }
        </ul>
        <button className='habits-reset' onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
