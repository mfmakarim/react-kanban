import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/sidebar.component';
import MainContainer from './components/main-container.component';
import AddForm from './components/add-form.component';

import { useSelector } from 'react-redux';


const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  const toggleFormState = useSelector(state => state.task.toggleForm);

  return (
    <Wrapper className="App">
    { toggleFormState ? 
      <AddForm /> : ''
    }
      <Sidebar/>
      <MainContainer/>      
    </Wrapper>
  );
}

export default App;
