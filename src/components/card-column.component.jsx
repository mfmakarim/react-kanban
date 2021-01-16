import React from 'react';
import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Block from './block.component';

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

const Card = styled.div`
    background-color: #f6f5f2;
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

const CardColumn = ({title, items}) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            <Button><FontAwesomeIcon icon={faPlus} color="#fff"/> Add Task</Button>
        </Header>
        <Block height="25px"/>
        {
            items.map(({id, title, time, assigns, tags}) => (
                <Card key={id}>
                    <CardTitle>{title}</CardTitle>
                    <Block height="25px"/>
                    <CardInfo>
                        <div>
                            {assigns.map(({id, name})=>(
                                <Assign key={id}>{name}</Assign>
                            ))}
                            {tags.map(({id, bgColor, color, label})=>(
                                <Tag key={id} bgColor={bgColor} color={color}>{label}</Tag>
                            ))}
                        </div>
                        <Time>{time}</Time>
                    </CardInfo>
                </Card>
            ))
        }
    </Wrapper>
);

export default CardColumn;