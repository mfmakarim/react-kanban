import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar.component';

const Wrapper = styled.div`
    display: block;
`;

const Title = styled.h3`
    color: #02221c;
    font-size: 16px;
`;

const Items = styled.ul`
    list-style: none;
    margin: 10px 0;
    padding-left: 0;
`;

const Item = styled.li`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center !important;
    color: #fff;
`;

const Badge = styled.span`
    width: 15px;
    height: 15px;
    display: inline-block;
    text-align: center;
    background-color: #fff;
    border-radius: 100%;
    font-size: 10px;
    font-weight: 700;
    color: #02221c;
    margin-left: 15px;
`;

const AvatarWrapper = styled.div`
    display: flex;
`;

const Menu = ({items, title}) => (
    <Wrapper>
        <Title>{title}</Title>
        <Items>
            {items.map(({id, label, badge, avatars}) => (
                <Item key={id}>
                    <div>
                        {label}
                        {badge ? <Badge>{badge}</Badge> : ''}
                    </div>
                    <AvatarWrapper>
                        {avatars ?
                            avatars.map(({id, imgSrc}) => (
                                <Avatar key={id} imgSrc={imgSrc} size="20px"/>
                            )) 
                            : ''}
                    </AvatarWrapper>
                </Item>
            ))}
        </Items>
    </Wrapper>
);

export default Menu;