import { HiSearch } from "react-icons/hi";
import css from './SearchBar.module.css';

export const SearchBar = ({ value, onChange }) => {
    const handleSearch = e => {
        onChange(e.target.value);
    }
    return(
        <div className={css.inputWrapper}>
            <input
                type="text"
                value={value}
                onChange={handleSearch}
                placeholder="Search Products..."
            />
            <HiSearch className={css.icon}/>
        </div>
    )
}