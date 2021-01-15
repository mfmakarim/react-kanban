import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/sidebar.component';
import MainContainer from './components/main-container.component';

const Wrapper = styled.div`
  display: flex;
`;

const App = () => (
    <Wrapper className="App">
      <Sidebar/>
      <MainContainer/>      
    </Wrapper>
  );

export default App;
