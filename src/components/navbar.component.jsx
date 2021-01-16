import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo-prosa.png';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Avatar from './avatar.component';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

const Brand = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    height: 100%;
    width: auto;
`;

const Title = styled.h3`
    font-size: 28px;
    color: #161616;
    margin-left: 15px;
`;

const More = styled.div`
    background-color: #eaeaea;
    width: 25px;
    height: 24px;
    padding-top: 2px;
    text-align: center;
    border-radius: 100%;
    margin-left: 50px;
    margin-top: 10px;
`;

const Member = styled.div`
    display: flex;
    align-items: center;
`;

const Badge = styled.div`
    background-color: #eaeaea;
    padding: 5px 15px;
    border-radius: 25px;
    font-size: 14px;
    margin-left: 10px;
    color: #161616;
    font-weight: 600;
`;

const Navbar = () => (
    <Wrapper>
        <Brand>
            <Image alt="Prosa" src={Logo}/>
            <Title>Kanban Prosa</Title>
            <More><FontAwesomeIcon icon={faEllipsisH} color="#ccc"/></More>
        </Brand>
        <Member>
            <Avatar imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" size="25px"/>
            <Avatar imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" size="25px"/>
            <Avatar imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" size="25px"/>
            <Badge>70 Members</Badge>
        </Member>
    </Wrapper>
);

export default Navbar;