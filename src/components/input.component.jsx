import React from 'react';
import styled from 'styled-components';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    padding: 10px 40px 10px 15px;
    font-size: 17px;
    border: none;
    border-radius: 25px;
    float: left;
    width: 100%;
    background: rgba(0,0,0,.05);
    display: block;
    box-sizing: border-box;
    color: #fff;
    &:focus{
        border: 1px solid #fff;
        outline: none;
    }
    &::placeholder{
        color: rgba(255,255,255,.5);
    }
`;

const InputIcon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    margin-top: 10px;
    margin-right: 15px;
`;

const Input = () => (
    <Wrapper>
        <StyledInput type="text" placeholder="Search.."/>
        <InputIcon>
            <FontAwesomeIcon icon={faSearch} color="rgba(255,255,255,.5)"/>
        </InputIcon>
    </Wrapper>
);

export default Input;