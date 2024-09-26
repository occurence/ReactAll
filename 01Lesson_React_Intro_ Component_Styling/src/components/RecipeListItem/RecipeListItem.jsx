import css from './RecipeListItem.module.css';
import { CiClock1 } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa";
import PropTypes from 'prop-types';

export const RecipeListItem = ({name, time, servings, calories, image, difficulty}) => {
    const isLoggedIn = true;
    
    return <li className={css.recipeListItem}>
        {isLoggedIn && <p>User is Logged In</p>}
        <h2>{name}</h2>
        <img src={image} alt={name} width="100"/>
        <div className={css.recipeInfo}>
            <div className={css.infoBlock}>
                <CiClock1 />
                <p>{time} minutes</p>
            </div>
            <div className={css.infoBlock}>
                <FaChartPie className={css.pieIcon}/>
                <p>{servings} servings</p>
            </div>
            <div className={css.infoBlock}>
                <span></span>
                <p>{calories} calories</p>
            </div>
            <div className={css.infoBlock}>
                <span></span>
                <p>Difficulty: {difficulty}</p>
            </div>
        </div>
    </li>
}

RecipeListItem.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    isEasy: PropTypes.bool.isRequired,
}