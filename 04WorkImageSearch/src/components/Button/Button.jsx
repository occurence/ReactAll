import css from './Button.module.css';

export const Button = ({ onClick }) => {
    return(
        <div className={css.buttonWrap}>
            <button
                onClick={onClick}
                className={css.button}
            >
                Load More
            </button>
        </div>
    )
}