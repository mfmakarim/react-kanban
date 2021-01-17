import React from 'react';
import styled from 'styled-components';
import Block from './block.component';
import { Draggable } from 'react-beautiful-dnd';

const Wrapper = styled.div`
    background-color: ${props => (props.isDragging ? '#fcfbf5': '#f6f5f2')};
    border: ${props => (props.isDragging ? '1px solid #f6f5f2' : 'none')};
    width: 100%;
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 6px;
    box-sizing: border-box;
`;

const CardTitle = styled.span`
    font-weight: bold;
    color: #30302f;
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
`;

const Tag = styled.div`
    background-color: ${props => props.bgColor};
    box-sizing: border-box;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.color};
    float: left;
`;

const Time = styled.div`
    font-weight: bold;
    color: #babab9;
    font-size: 12px;
`;

const Assign = styled.div`
    background-color: #def9f3;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 20px;
    float: left;
    margin-right: 5px;
    text-align: center;
    color: #161616;
`;

const Card = ({id, index, content}) => (
    <Draggable key={id} draggableId={id} index={index}>
        {(provided, snapshot) => (
        <Wrapper
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
        >
            <CardTitle>{content.title}</CardTitle>
            <Block height="25px"/>
            <CardInfo>
                <div>
                    {content.assigns.map(({id, name})=>(
                        <Assign key={id}>{name}</Assign>
                    ))}
                    {content.tags.map(({id, bgColor, color, label})=>(
                        <Tag key={id} bgColor={bgColor} color={color}>{label}</Tag>
                    ))}
                </div>
                <Time>{content.time}</Time>
            </CardInfo>
        </Wrapper>
        )}
    </Draggable>
)

export default Card;