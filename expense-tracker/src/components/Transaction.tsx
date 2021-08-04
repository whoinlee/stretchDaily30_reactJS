import React, { useContext } from 'react';
//-- Contexts
import { GlobalContext } from '../contexts/GlobalState';
//-- Types
import { TransactionType } from '../datatypes/DataTypes';
//-- Styles
import '../styles/Transactions.css';


type Props = {
  transaction: TransactionType;
};
const Transaction:React.FC<Props> = ( {transaction} ) => {
  const { deleteTransaction } = useContext(GlobalContext);
  // console.log("Transaction :: deleteTransaction ? ", deleteTransaction);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
