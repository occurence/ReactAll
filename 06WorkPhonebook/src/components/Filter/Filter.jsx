import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {// setFilter
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
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
// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     setFilterx: PropTypes.func.isRequired,
// }