import { useDispatch, useSelector } from 'react-redux';
import { withdraw, deposit } from './redux/bankSlice';
import { getBalance } from './redux/selector';

export const Bank = () => {
    const dispatch = useDispatch();
    const balance = useSelector(getBalance);

    const handleWithdraw = () => {
        dispatch(withdraw(5));
    }
    const handleDeposit = () => {
        dispatch(deposit(10));
    }
    return(
        <div>Bank: {balance}
            <button onClick={handleWithdraw}>Withdraw 5</button>
            <button onClick={handleDeposit}>Deposit 10</button>
        </div>
    )
}