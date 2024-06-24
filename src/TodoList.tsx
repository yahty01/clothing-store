// @flow
import styled from "styled-components";
import {TasksProps} from "./App";
import {Tasks} from "./Tasks";

type TodoListProps = {
	title: string;
	tasks: TasksProps[];
};


export const TodoList = ({title, tasks}: TodoListProps) => {
	return (
		<StyledTodoList>
			<h3>{title}</h3>
			<div>
				<input/>
				<button>+</button>
			</div>
			<Tasks tasks={tasks} />
			<ButtonArea>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</ButtonArea>
		</StyledTodoList>
	);
};

const StyledTodoList = styled.div`
  background-color: darkolivegreen;
	display: flex;
	flex-direction: column;
	h3 {
		color: red;
	}
	
`

const ButtonArea = styled(StyledTodoList)`
	
	
`