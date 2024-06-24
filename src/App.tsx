import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";


export type TasksProps = {
  id: number
  title: string
  isDone: boolean
}

export const tasks1: TasksProps[]= [
  { id: 3, title: 'ReactJS', isDone: false },
  { id: 5, title: 'Typescript', isDone: false },
  { id: 6, title: 'RTK query', isDone: false },
]

export const tasks2:TasksProps[] = [
  { id: 1, title: 'My Home ', isDone: true },//0
  { id: 2, title: '223', isDone: true }, //1
  { id: 3, title: '33', isDone: false },//2
  { id: 4, title: '33', isDone: false },//2
]
export const tasks3:TasksProps[] = []

function App() {
    return (
        <div className="App">
            <TodoList title='new title' tasks={tasks1} />
            <TodoList title='new 2' tasks={tasks2}/>
            <TodoList title='new 3' tasks={tasks3}/>
        </div>
    );
}

export default App;
