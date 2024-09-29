import css from './ReviewListItem.module.css';

export const ReviewListItem = ({ author, content }) => {
    return(
        <li className={css.reviewListItem}>
            <p className={css.author}>Author: {author}</p>
            <p>{content}</p>
        </li>
    )
}