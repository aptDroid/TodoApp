import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		return (
		<ul> 
		{ this.props.todos.map((todo, id) => 
			<Todo 
			{...todo}
			onToggle={this.props.onToggle}
			onDelete={this.props.onDelete}
			key={id} 
			/>
			)}
		</ul>
		);
	}
}

export default TodoList;
