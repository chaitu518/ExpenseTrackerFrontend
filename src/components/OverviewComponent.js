// src/components/OverviewComponent.js
import React, { useState } from 'react';
import styled from 'styled-components';
import AddTransaction from './AddTransaction';

const BalanceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Balance = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const OverviewComponent = ({ transactions, addTransaction }) => {
  const [isAddTxnVisible, setIsAddTxnVisible] = useState(false);

  const calculateBalance = () => {
    let income = 0;
    let expense = 0;
    transactions.forEach((t) => {
      if (t.category === 'Salary' || t.category === 'Bonus') {
        income += t.amount;
      } else {
        expense += t.amount;
      }
    });
    return income - expense;
  };

  return (
    <>
      <BalanceBox>
        <Balance>Balance: ${calculateBalance()}</Balance>
        <AddButton onClick={() => setIsAddTxnVisible(!isAddTxnVisible)}>
          {isAddTxnVisible ? 'Cancel' : 'Add'}
        </AddButton>
      </BalanceBox>
      {isAddTxnVisible && <AddTransaction addTransaction={addTransaction} />}
    </>
  );
};

export default OverviewComponent;