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
    const [tasks, setTasks] = useState([
        {   
            "id": "1",
            "title": "Backlog",
            "list": [
                {
                    "id": "1",
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
            ]
        },
        {   
            "id": "2",
            "title": "To Do",
            "list": [
                {
                    "id": "3",
                    "title": "Fix bug on Mobile Front-End",
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
                            "bgColor": "#d2e3ff",
                            "color": "#2d61f0",
                            "label": "FrontEnd"
                        }
                    ]
                },
                {
                    "id": "4",
                    "title": "Implement two-factor authentication",
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
            ]
        },
        {   
            "id": "3",
            "title": "To Do",
            "list": [
                {
                    "id": "5",
                    "title": "Words matching optimization",
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
                            "label": "research"
                        }
                    ]
                },
            ]
        },
    ]);

    const onDragEnd = result => {
        const { destination, source } = result;

        if(!destination){
            return
        }

        if(destination.droppableId === source.droppableId &&
            destination.index === source.index){
                return;
            }
        
        console.log("source", source.droppableId);

        const newTasks = tasks;
        const before = newTasks.filter(i => i.id === source.droppableId);
        const after = newTasks.filter(i => i.id === destination.droppableId);
        const picked = before[0].list[source.index];

        before[0].list.splice(source.index, 1);
        after[0].list.splice(destination.index, 0, picked);

    };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
            {tasks.map(({id, list, title}) => (
                <CardColumn key={id} id={id} title={title} list={list}/>
            ))}
            </Wrapper>
        </DragDropContext>
    );
}

export default Kanban;