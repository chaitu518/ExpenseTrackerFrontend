// src/components/TransactionsContainer.js
import React from 'react';
import styled from 'styled-components';
import TransactionItem from './TransactionItem';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TransactionsContainer = ({ transactions, deleteTransaction }) => {
  return (
    <List>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </List>
  );
};

export default TransactionsContainer;
