import { RecipeListItem } from "components/RecipeListItem/RecipeListItem";
import css from './RecipeList.module.css';
import PropTypes from 'prop-types';

export const RecipeList = ({ recipes }) => {
    return <ul className={css.recipeList}>
        {recipes.map(({id, name, time, servings, calories, image, difficulty}) => (
            // {recipes.map(recipe => (
            // <li>{recipe.name}</li>
            <RecipeListItem
                key={id}
                name={name}
                time={time}
                servings={servings}
                calories={calories}
                image={image}
                difficulty={difficulty}
            />
        ))}
    </ul>
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}