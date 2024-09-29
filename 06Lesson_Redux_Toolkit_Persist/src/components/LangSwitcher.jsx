import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from './redux/localeSlice';
import { getLang } from './redux/selector';

export const LangSwitcher = () => {
    const dispatch = useDispatch();
    const lang = useSelector(getLang);

    const handleLang = e => {
        dispatch(changeLang(e.target.value));
    }
    return(
        <div>Currency: {lang}<br />
            <select onChange={handleLang}>
                <option value="en">EN</option>
                <option value="uk">UK</option>
                <option value="pl">PL</option>
            </select>
        </div>
    )
}