import React, {useState} from 'react';
import styled from 'styled-components';
import CardColumn from './card-column.component';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Kanban = () => {
    const [items] = useState([
        {
            "id": 1,
            "title": "Improve accuracy of voice-to-text model",
            "time": "2 days",
            "assigns": [
                {
                    "id": 1,
                    "name": "A",
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
            ],
            "tags": [
                {
                    "id": 1,
                    "bgColor": "#fff3d2",
                    "color": "#f0c22d",
                    "label": "Research"
                }
            ]
        },
        {
            "id": 2,
            "title": "Create API to load user info from database",
            "time": "2 days",
            "assigns": [
                {
                    "id": 1,
                    "name": "B",
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
            ],
            "tags": [
                {
                    "id": 1,
                    "bgColor": "#ffe5f0",
                    "color": "#f153a7",
                    "label": "Backend"
                }
            ]
        },
        
    ]);

    return(
        <Wrapper>
            <CardColumn title="Backlog" items={items}/>
            <CardColumn title="To Do" items={items}/>
            <CardColumn title="Done" items={items}/>
        </Wrapper>
    );
}

export default Kanban;