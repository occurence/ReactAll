import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilterx }) => {// setFilter
    const handleFilterChange = e => {
        setFilterx(e.target.value);
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
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilterx: PropTypes.func.isRequired,
}