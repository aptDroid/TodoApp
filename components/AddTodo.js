import React from 'react';

class AddTodo extends React.Component
{
	constructor(props)
	{
		super(props);
		this.onAddClick = this.onAddClick.bind(this);
		this.handleKeyEnter = this.handleKeyEnter.bind(this);
	}
	
	onAddClick(text)
	{
		this.props.onAddClick(text);
	}
	handleKeyEnter(e)
	{
		if(e.key === 'Enter')
		{
			this.props.onAddClick(document.getElementById('text').value);
		}
	}
	
	render()
	{
		return(
			<div>
				<input id="text" 
				onKeyPress={this.handleKeyEnter}
				style={{borderLeft: '0px', borderTop: '0px', borderRight: '0px', borderBottom: '2px solid gray'}}
				/>
				&nbsp;
				<button 
				onClick={() => this.onAddClick(document.getElementById('text').value)}
				style={{borderRadius: '10px', color: 'white', backgroundColor: 'orange'}}
				>
				Add Item
				</button>
			</div>
		);
	}
}

export default AddTodo;
