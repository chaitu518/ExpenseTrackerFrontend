// src/components/Tracker.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OverviewComponent from './OverviewComponent';
import TransactionsContainer from './TransactionsContainer';
import axios from 'axios';

const Container = styled.div`
  width: 360px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Tracker = () => {
  const [transactions, setTransactions] = useState([]);
  const userId = 1; // hardcoded for now

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/expenses/${userId}`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addTransaction = (transaction) => {
    const dto = {
      userId: userId,
      category: transaction.category,
      amount: transaction.amount,
      description: transaction.desc,
      date: new Date().toISOString().split('T')[0] // format as yyyy-MM-dd
    };

    axios
      .post('http://localhost:8080/api/expenses/add', dto)
      .then((res) => setTransactions([...transactions, res.data]))
      .catch((err) => console.error(err));
  };

  const deleteTransaction = (id) => {
    axios
      .delete(`http://localhost:8080/api/expenses/${id}`)
      .then(() => setTransactions(transactions.filter((t) => t.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <OverviewComponent transactions={transactions} addTransaction={addTransaction} />
      <TransactionsContainer transactions={transactions} deleteTransaction={deleteTransaction} />
    </Container>
  );
};

export default Tracker;