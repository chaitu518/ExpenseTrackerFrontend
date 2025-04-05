// src/components/TransactionItem.js
import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  padding: 10px;
  border-left: 5px solid ${(props) => (['Salary', 'Bonus'].includes(props.category) ? 'green' : 'red')};
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-size: 16px;
  cursor: pointer;
`;

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <Item category={transaction.category}>
      <span>{transaction.description} - ${transaction.amount}</span>
      <DeleteButton onClick={() => deleteTransaction(transaction.id)}>x</DeleteButton>
    </Item>
  );
};

export default TransactionItem;