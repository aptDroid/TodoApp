import React from 'react';

class Todo extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		return (
		<li key={this.props.id} style={{listStyleType: 'circle'}}> 
			<span 
			onClick={() => this.props.onToggle(this.props.index)} 
			style={this.props.completed? {textDecoration: 'line-through', color:'gray'} : {textDecoration: 'none', color: 'black'}} >
				{this.props.text}
			</span> 
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span
			onClick={() => this.props.onDelete(this.props.index)}
			style={{color:'white', backgroundColor: 'red',textDecoration: 'bold',borderRadius: '5px'}}>
				&nbsp;&times;&nbsp;
			</span>
		</li> 
		);
	}
}

export default Todo;
