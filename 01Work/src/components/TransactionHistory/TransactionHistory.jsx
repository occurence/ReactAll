import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    return(
        <table className={css.transactionHistory}>
            <thead>
            <tr>
                <th className={css.tableHeader}>Type</th>
                <th className={css.tableHeader}>Amount</th>
                <th className={css.tableHeader}>Currency</th>
            </tr>
            </thead>
            <tbody>
                {transactions.map(
                    transaction => (
                        <tr className={css.tableRow}
                            key={transaction.id}
                        >
                            <td className={css.tableData}>{transaction.type}</td>
                            <td className={css.tableData}>{transaction.amount}</td>
                            <td className={css.tableData}>{transaction.currency}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}