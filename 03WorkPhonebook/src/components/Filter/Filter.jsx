import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
    const handleFilterChange = e => {
        setFilter(e.target.value);
    }
    return(
        <div className={css.container}>
            <p>Find Name</p>
            <input
                type="text"
                name="filter"
                placeholder="Search by name"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}