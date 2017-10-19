import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends React.Component
{
	constructor(props)
	{
		super(props);
		this.toggleTodo = this.toggleTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}
	
	addTodo(text)
	{
		this.props.onAdd(text);
	}
	
	toggleTodo(index)
	{
		this.props.onToggle(index);
	}
	
	onDelete(index)
	{
		this.props.onDelete(index);
	}
	render()
	{
	const allTodos = this.props.todos.map((todo,id) => {
		return {...todo, index:id};
	});
	//console.log('ALL TODOS =========>>',allTodos);
	const activeTodos = allTodos.filter(item => !item.completed);
	const completedTodos = allTodos.filter(item => item.completed);
	let store = this.props.store;
	
	return  (
		<div>
			<div>
				<AddTodo onAddClick={this.addTodo} />
				<TodoList 
				todos={activeTodos}
				onToggle={this.toggleTodo}
				onDelete={this.onDelete}
				/>
				<TodoList 
				todos={completedTodos}
				onToggle={this.toggleTodo}
				onDelete={this.onDelete}
				/>
			</div>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onAdd : (text) => {
			dispatch({type: 'ADD_TODO', text});
		},
		onToggle: (index) => {
			dispatch({type: 'TOGGLE_TODO', index});
		},
		onDelete: (index) => {
			dispatch({type: 'DELETE_TODO', index});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
