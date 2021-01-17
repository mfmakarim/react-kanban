import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar.component';
import Kanban from './kanban.component';
import Block from './block.component';


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 35px;
`;

const MainContainer = () => (
    <Wrapper>
        <Navbar/>
        <Block height="50px"/>
        <Kanban/>
    </Wrapper>
);

export default MainContainer;