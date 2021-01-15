import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-weight: 600px;
    color: #fff;
    margin-right: 15px;
`;

const Count = styled.h5`
    font-size: 20px;
`;

const Label = styled.span`
    font-size: 16px;
`;

const Status = ({count, label}) => (
    <Wrapper>
        <Count>{count}</Count>
        <Label>{label}</Label>
    </Wrapper>
);

export default Status;