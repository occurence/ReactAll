import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from './redux/localeSlice';
import { getLang } from './redux/selector';

export const LangSwitcher = () => {
    const dispatch = useDispatch();
    const lang = useSelector(getLang);//state => state.locale.lang

    const handleLang = (lang) => {
        dispatch(changeLang(lang.target.value));
    }
    return(
        <div>Lang Switcher
            <select value={lang} onChange={handleLang}>
                <option value="uk">UK</option>
                <option value="en">EN</option>
                <option value="pl">PL</option>
            </select>
        </div>
    )
}