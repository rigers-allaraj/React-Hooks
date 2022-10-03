import Todo from './Todo.js';
import { useReducer, useState } from 'react';
import { Count } from './Count';

export const COUNT_ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

export const ACTIONS = {
  ADD_TODO: 'increment',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO:'delete-todo'
};

const reducerCount = (state, action) => {
  switch (action.type) {
    case COUNT_ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case COUNT_ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state.count;
  }
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo =>{
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo;
      })
      case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
      default :
      return todos
  }
};

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Main() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [state, dispatchCount] = useReducer(reducerCount, { count: 0 });

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <div className='App'>
      <Count state={state} dispatch={dispatchCount}/>
      <p style={{ fontSize: "2rem"}}>Todo:</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>;
      })}
    </div>
  );
}


export default Main;