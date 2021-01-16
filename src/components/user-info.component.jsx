import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
    flex: auto;
    margin-left: 10px;
`;

const UserName = styled.h5`
    font-weight: 600;
    color: #fff;
    font-size: 17px;
`;

const UserTitle = styled.p`
    color: #fff;
    opacity: .8;
    font-size: 14px;
`;

const UserInfo = ({name, title}) => (
    <Wrapper>
        <UserName>{name}</UserName>
        <UserTitle>{title}</UserTitle>
    </Wrapper>
);

export default UserInfo;