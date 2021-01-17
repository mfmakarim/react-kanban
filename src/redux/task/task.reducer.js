import TaskTypes from './task.types';

const INITIAL_STATE = {
    tasks: [
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
            "title": "Done",
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
    ],
    toggleForm: false,
    columnId: ""
}

const taskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TaskTypes.GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case TaskTypes.ADD_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        case TaskTypes.TOGGLE_FORM:
            return {
                ...state,
                toggleForm: !state.toggleForm
            }
        case TaskTypes.GET_ID:
            return {
                ...state,
                columnId: action.payload
            }
        default:
            return state;
    }
}

export default taskReducer;
