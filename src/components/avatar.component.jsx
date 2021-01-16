import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size };
    height: ${props => props.size };
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 100%;
    margin-right: 5px;
    flex: 0 0 ${props => props.size };
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Avatar = ({imgSrc, size}) => (
    <Wrapper size={size}>
        <Image src={imgSrc}/>
    </Wrapper>
)

export default Avatar;