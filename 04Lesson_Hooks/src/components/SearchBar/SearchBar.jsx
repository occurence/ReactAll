import { FaSearch } from "react-icons/fa";
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
    return(
        <header className={css.searchBar}>
            <form onSubmit={onSubmit} className={css.searchForm}>
                <button type="submit" className={css.searchFormButton}>
                    <FaSearch />
                    <span className={css.searchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={css.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search"
                    name="search"
                />
            </form>
        </header>
    )
}