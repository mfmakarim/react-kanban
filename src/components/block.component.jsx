import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
    height: ${props => props.height};
`;

const Block = ({height}) => <Space height={height}/>

export default Block;