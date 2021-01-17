import React, {useState} from 'react';
import styled from 'styled-components';
import CardColumn from './card-column.component';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;



const Kanban = () => {
    const tasks = useSelector(state => state.task.tasks);
    
    const onDragEnd = result => {
        const { destination, source } = result;

        if(!destination){
            return
        }

        if(destination.droppableId === source.droppableId &&
            destination.index === source.index){
                return;
            }
        
        console.log("source", source.droppableId);

        const newTasks = tasks;
        const before = newTasks.filter(i => i.id === source.droppableId);
        const after = newTasks.filter(i => i.id === destination.droppableId);
        const picked = before[0].list[source.index];

        before[0].list.splice(source.index, 1);
        after[0].list.splice(destination.index, 0, picked);

    };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
            {tasks.map(({id, list, title}) => (
                <CardColumn key={id} id={id} title={title} list={list}/>
            ))}
            </Wrapper>
        </DragDropContext>
    );
}

export default Kanban;