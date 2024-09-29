import { useDispatch, useSelector } from 'react-redux';
import { deposit } from './redux/balanceSlice';
import { withdraw } from './redux/balanceSlice';
import { getBalance } from './redux/selector';

export const Bank = () => {
    const dispatch = useDispatch();
    const balance = useSelector(getBalance);
    
    const handleDeposit = () => {
        dispatch(deposit(10));
    }
    const handleWithdraw = () => {
        dispatch(withdraw(5));
    }
    return(
        <div>Bank
            <button onClick={handleDeposit}>Deposit 10</button>
            <button onClick={handleWithdraw}>Withdraw 5</button>
        </div>
    )
}