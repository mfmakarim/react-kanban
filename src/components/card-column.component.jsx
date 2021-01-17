import React from 'react';
import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Block from './block.component';
import Card from './card.component';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { toggleForm, getId } from './../redux/task/task.actions';

const Wrapper = styled.div`
    border: 1px solid #f7f7f7;
    border-radius: 6px;
    width: 32%;
    max-width: 352px;
    padding: 20px 25px;
    box-sizing: border-box;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    color: #161616;
`;

const Button = styled.button`
    color: #fff;
    background-color: #0cac90;
    border: none;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
    &:hover{
        opacity: .8;
        cursor: pointer;
    }
`;

const CardList = styled.div`
    background-color: ${props => (props.isDraggingOver ? '#edf9ff' : 'white')};
`;

const CardColumn = ({id, title, list}) => { 
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(getId(id));
        dispatch(toggleForm());
    }
    return(
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            <Button onClick={() => handleClick(id)}><FontAwesomeIcon icon={faPlus} color="#fff"/> Add Task</Button>
        </Header>
        <Block height="25px"/>
        <Droppable droppableId={id}>
        {(provided, snapshot) => (
            <CardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
            >
            {list.map(({id, ...content}, index) => (
                <Card key={id} id={id} index={index} content={{...content}} />
            ))}
            {provided.placeholder}
            </CardList>
            )
        }
        </Droppable>
    </Wrapper>
    );
}

export default CardColumn;