import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  font-family: 'VT323', monospace;
  display : flex;
  width : 100%;
  flex-direction : column;
  align-items : center;
  margin : 15px;
`;


const BalanceBox = styled.div`
    font-size : 20px;
    font-weight : 600;
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`;

const AddTransaction = styled.button`
    background-color : black;
    color : white;
    border-radius : 5px;
    padding : 5px 10px; 
    cursor : pointer;
    font-weight : bold;
`;


const AddTransactionContainer = styled.div`
    display : flex;
    flex-direction : column;
    border : 1px solid #e6e8e9;
    gap : 10px;
    width:100%;
    padding : 10px 20px;
    margin : 15px 20px;

    & input{
        outline:none;
        padding : 10px 12px;
        border-radius: 4px;
        border : 1px solid #e6e8e9;
        margin : 4px 10px;
    }

`;


const RadioBox = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    align-items:center;
`;

const ExpenseContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:15px;
    padding:15px 20px;
    margin:20px 0px 0px 10px;
    width:100%;

`;

const ExpenseBox = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px 20px;
    border-radius: 4px;
    border : 1px solid #e6e8e9;
    width:100%;
    text-align:center;
    font-size:17px;

    & span{
        
        font-size:25px;
        color: ${(props) => (props.isIncome ? 'green' : 'red')};
    }
`;







const AddTransactionView = (props) =>{


    const [amount,setAmount] = useState("");
    const [desc,setDesc] = useState("");
    const [type,setType] = useState("EXPENSE");

    const addTransaction = ()=>{

        props.addTransaction({amount:Number(amount), desc , type, id:Date.now()});
        props.toggleAddBtn();
        // console.log(amount + " " + desc + " " + type);
    }

    return(
        <AddTransactionContainer>

            <input placeholder='Amount' type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
            <input placeholder='Description' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>

            <RadioBox>
                <input type="radio" id='expense' value="EXPENSE" name="type" checked={type ==="EXPENSE"} onChange={(e)=>setType(e.target.value)}/>
                <label htmlFor='expense'>Expense</label>

                <input type="radio" id='income' value="INCOME" name="type" checked={type ==="INCOME"} onChange={(e)=>setType(e.target.value)}/>
                <label htmlFor='income'>Income</label>
            </RadioBox>

            <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>


        </AddTransactionContainer>
    )
}










function OverviewComp(props) {


    const [isAddTransBtn, toggleAddBtn] = useState(false);


  return (
    <Container>

        <BalanceBox>
            Balance: ${props.income - props.expense}

            <AddTransaction onClick={()=>{toggleAddBtn(!isAddTransBtn)}}>{isAddTransBtn ? "CANCEL" : "ADD"}</AddTransaction>
        </BalanceBox>


        {isAddTransBtn && <AddTransactionView toggleAddBtn={toggleAddBtn} addTransaction={props.addTransaction}/> }


        <ExpenseContainer>

            <ExpenseBox isIncome={false}>
                Expense<span>${props.expense}</span>
            </ExpenseBox>

            <ExpenseBox isIncome={true}>
                Income<span>${props.income}</span>
            </ExpenseBox>

        </ExpenseContainer>

    </Container>
  )
}

export default OverviewComp