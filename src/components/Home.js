import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import OverviewComp from './OverviewComp';
import TransactionComp from './TransactionComp';




const Container = styled.div`
  font-family: 'VT323', monospace;
  display : flex;
  flex-direction : column;
  align-items : center;
  width:30%;
`;

function Home() {




  const [transactions,updateTransaction] = useState([]);

  const [expense,updateExpence] = useState([]);
  const [income,updateIncome] = useState([]);


  const addTransaction=(payload)=>{

    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
    
  }

  const calculateBalance = () =>{
    let exp = 0;
    let inc = 0;

    transactions.map((payload) => {
      payload.type==="EXPENSE" ? exp = exp + payload.amount : inc = inc + payload.amount 
    });

    updateExpence(exp);
    updateIncome(inc);
  }



  useEffect(() => {
    calculateBalance();
  }, [transactions]);


  return (
    <Container>

        <OverviewComp addTransaction={addTransaction} expense={expense} income={income}/>
        <TransactionComp transactions={transactions} />

    </Container>
  )
}

export default Home;