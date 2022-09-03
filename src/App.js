import { useReducer } from 'react';
import './App.css';

const ACTIONS = {
  INCREMENT:"increment",
  DECREMENT:"decrement"
}

function reducer(state,action) {
  switch (action.type) {
    case  ACTIONS.INCREMENT:
      return {count:state.count + 1}
    case ACTIONS.DECREMENT:
      return {count:state.count - 1}
    default:
      return state;
  }
}

function App() {
  const [state,dispatch] = useReducer(reducer,{count:0});

	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
			<button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
		</>
	);
}

export default App;