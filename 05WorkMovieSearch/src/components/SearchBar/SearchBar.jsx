import { HiSearch } from "react-icons/hi";
import css from './SearchBar.module.css';
import { DebounceInput } from "react-debounce-input";

export const SearchBar = ({ value, onChange }) => {
    const handleSearch = e => {
        onChange(e.target.value);
    }
    return(
        <div className={css.inputWrapper}>
            {/* <input
                type="text"
                value={value}
                onChange={handleSearch}
                placeholder="Search Products..."
            /> */}
            <DebounceInput
                type="text"
                value={value}
                onChange={handleSearch}
                placeholder="Search Products..."
                minLength={2}
                debounceTimeout={500}
            />
            <HiSearch className={css.icon}/>
        </div>
    )
}