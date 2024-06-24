// @flow
import * as React from 'react';
import styled from "styled-components";
import {TasksProps} from "./App";

type TaskProps = {
	tasks: TasksProps[];
}

export const Tasks = ({tasks}: TaskProps) => {
	return tasks.length === 0
		?(<span>Задачи отсутствуют!</span>)
	  : (
		<StyledList>
			{
				tasks.map(t => (
					<li key={t.id}>
						<input type="checkbox" checked={t.isDone}/>
						<span>{t.title}</span>
					</li>
				))
			}
		</StyledList>
	);
};

const StyledList = styled.ul`
  text-decoration: none;

  li {
    span {
      color: #79454f;
    }
  }
`
