import React, { useState } from 'react';
import styled from 'styled-components';
import Block from './block.component';
import { useDispatch, useSelector } from 'react-redux';
import { addTasks, toggleForm } from './../redux/task/task.actions';

const Wrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    background-color: rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dialog = styled.div`
    width: 30%;
    background-color: white;
    border-radius: 6px;
    padding: 25px;
`;

const FormGroup = styled.div`
    box-sizing: border-box;
    margin-bottom: 15px;
`;

const FormLabel = styled.label`
    display: block;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
`;

const FormInput = styled.input`
    padding: 10px 15px;
    border: 1px solid #0cac90;
    border-radius: 6px;
    font-size: 16px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    &:focus{
        box-shadow: 0 0 4px #0cac90;
        outline: none;
    }
`;

const FlexCenter = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
`;

const Button = styled.button`
    background-color: ${props => props.color};
    padding: 15px 25px;
    color: #fff;
    border: none;
    border-radius: 6px;
    margin-right: 15px;
    &:hover{
        cursor: pointer;
        opacity: .8;
    }
`;

const AddForm = () => {
    const tasks = useSelector(state => state.task.tasks);
    const columnId = useSelector(state => state.task.columnId);
    const dispatch = useDispatch();

    const date_diff_indays = function(date1, date2) {
        let dt1 = new Date(date1);
        let dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let time = date_diff_indays(holdTask.start_date, holdTask.end_date);
        let newId = Math.random().toString().substr(2, 5);

        console.log(columnId);
        
        let selectedTasks = tasks.map(task => (
            task.id
        )).indexOf(columnId);

        tasks[selectedTasks].list.push({
            "id": newId,
            "title": holdTask.title,
            "time": time+" days",
            "assigns": [
                {
                    "id": 1,
                    "name": holdTask.assigns,
                    "imgSrc": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
            ],
            "tags": [
                {
                    "id": 1,
                    "bgColor": "#fff3d2",
                    "color": "#f0c22d",
                    "label": holdTask.tags
                }
            ]
        })


        dispatch(addTasks(tasks));
        dispatch(toggleForm());
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setHoldTask({
            ...holdTask,
            [e.target.name]: value
        });
        console.log(holdTask);
    }

    const [holdTask, setHoldTask] = useState(
        {
          "title": "",
          "tags": "",
          "assigns": "",
          "start_date": "",
          "end_date": "",
        }
    );

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toggleForm());
    }

    return(
    <Wrapper>
        <Dialog>
            <h3>New Task</h3>
            <Block height="20px"/>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormInput 
                        onChange={handleChange} 
                        value={holdTask.title}
                        type="text" 
                        name="title"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Tags</FormLabel>
                    <FormInput 
                        onChange={handleChange} 
                        value={holdTask.tags}
                        type="text" 
                        name="tags"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Assignee</FormLabel>
                    <FormInput 
                        onChange={handleChange} 
                        value={holdTask.assigns}
                        type="text" 
                        name="assigns"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Start Date</FormLabel>
                    <FormInput 
                        onChange={handleChange} 
                        value={holdTask.start_date}
                        type="date" 
                        name="start_date"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>End Date</FormLabel>
                    <FormInput 
                        onChange={handleChange} 
                        value={holdTask.end_date}
                        type="date" 
                        name="end_date"/>
                </FormGroup>
                <Block height="20px"/>
                <FlexCenter>
                    <Button color="#0cac90" type="submit">Create</Button>
                    <Button color="grey" onClick={handleClick}>Cancel</Button>
                </FlexCenter>
            </form>
        </Dialog>
    </Wrapper>  
    );
}

export default AddForm;