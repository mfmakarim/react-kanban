import React, {useState} from 'react';
import styled from 'styled-components';

import Input from './input.component';
import Avatar from './avatar.component';
import UserInfo from './user-info.component';
import Status from './status.component';
import Block from './block.component';
import Menu from './menu.component';

const Wrapper = styled.div`
    width: 350px;
    height: 100vh;
    background-color: #0cac90;
    padding: 24px;
`;

const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const UserStatus = styled.div`
    display: flex;
`;


const Sidebar = () => {
    const [menuItems] = useState([
        {
            "id": 1,
            "label": "Home",
            "badge": null,
            "avatars": []
        },
        {
            "id": 2,
            "label": "My Tasks",
            "badge": null,
            "avatars": []
        },
        {
            "id": 3,
            "label": "Notifications",
            "badge": "3",
            "avatars": []
        }
    ]);

    const [teamsItems] = useState([
        {
            "id": 1,
            "label": "Researchers",
            "badge": null,
            "avatars": [
                {
                    "id": 1,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
                {
                    "id": 2,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
                {
                    "id": 3,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
            ]
        },
        {
            "id": 2,
            "label": "FE/BE Team",
            "badge": null,
            "avatars": [
                {
                    "id": 1,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
                {
                    "id": 2,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
            ]
        },
        {
            "id": 3,
            "label": "PM Team",
            "badge": null,
            "avatars": [
                {
                    "id": 1,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
                {
                    "id": 2,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
                {
                    "id": 3,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
                {
                    "id": 4,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                },
            ]
        }
    ]);

    return(
    <Wrapper>
        <Input type="text" name="search"/>
        <Block height="70px"/>
        <UserInfoWrapper>
            <Avatar imgSrc="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" size="50px"/>
            <UserInfo name="Emilee Simchenko" title="Product Owner" />
        </UserInfoWrapper>
        <Block height="25px"/>
        <UserStatus>
            <Status count="372" label="Completed Tasks"/>
            <Status count="11" label="Open Tasks"/>
        </UserStatus>
        <Block height="50px"/>
        <Menu items={menuItems} title="MENU"/>
        <Block height="25px"/>
        <Menu items={teamsItems} title="TEAMS"/>
    </Wrapper>
    )
}

export default Sidebar;

