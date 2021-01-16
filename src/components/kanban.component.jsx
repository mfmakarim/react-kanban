import React, {useState} from 'react';
import styled from 'styled-components';
import CardColumn from './card-column.component';
import { DragDropContext } from 'react-beautiful-dnd';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;



const Kanban = () => {
    const [itemsBacklog] = useState([
        {
            "id": "1",
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
            "id": "2",
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

    const [itemsTodo] = useState([
        {
            "id": "3",
            "title": "Two-factor authentication to make private",
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
            "id": "4",
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

    const [itemsDone] = useState([
        {
            "id": "5",
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
            "id": "6",
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

    const onDragEnd = result => {
        
    };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <CardColumn id="1" title="Backlog" items={itemsBacklog}/>
                <CardColumn id="2" title="To Do" items={itemsTodo}/>
                <CardColumn id="3" title="Done" items={itemsDone}/>
            </Wrapper>
        </DragDropContext>
    );
}

export default Kanban;