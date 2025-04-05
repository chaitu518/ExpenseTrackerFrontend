// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Tracker from './components/Tracker';
import MonthlyView from './components/MonthlyView';
import GlobalStyles from './globalStyles';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const ToggleButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

function App() {
  const [view, setView] = useState('tracker');

  return (
    <Main>
      <GlobalStyles />
      {view === 'tracker' ? <Tracker /> : <MonthlyView />}
      <ToggleButton onClick={() => setView(view === 'tracker' ? 'monthly' : 'tracker')}>
        {view === 'tracker' ? 'View Monthly Summary' : 'Back to Tracker'}
      </ToggleButton>
    </Main>
  );
}

export default App;