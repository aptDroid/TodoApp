import {combineReducers} from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../actions/actions'

function todos(state = [], action)
{
	switch(action.type)
	{
		case ADD_TODO:
			return [
			...state,
			{
				text: action.text,
				completed: false
			}
			];
		case TOGGLE_TODO:
			return [
			...state.slice(0,action.index),
			{...state[action.index], completed: !state[action.index].completed},
			...state.slice(action.index+1)
			];
		case DELETE_TODO:
			return [
			...state.slice(0,action.index),
			...state.slice(action.index+1)
			];

		default:
			return state
	}
}

const todoApp = combineReducers({
	todos
})

export default todoApp
