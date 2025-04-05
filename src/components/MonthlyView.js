// src/components/MonthlyView.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 360px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const MonthlyView = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const userId = 1; // static for now
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/expenses/${userId}/monthly?month=${month}&year=${year}`)
      .then((res) => setMonthlyData(res.data))
      .catch((err) => console.error(err));
  }, [month, year]);

  const total = monthlyData.reduce((sum, txn) => sum + txn.amount, 0);

  return (
    <Container>
      <h3>Monthly Summary - {month}/{year}</h3>
      <ul>
        {monthlyData.map((txn) => (
          <li key={txn.id}>{txn.category}: ${txn.amount} - {txn.description}</li>
        ))}
      </ul>
      <strong>Total: ${total}</strong>
    </Container>
  );
};

export default MonthlyView;
