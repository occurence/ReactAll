import { Helmet, HelmetProvider } from "react-helmet-async";
import css from './Others.module.css';

const Others = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>

{/* <div className={css.right}></div> */}









            <div className={css.left}>
                <div className={css.qUL}>UPPER LEFT</div>
                <div className={css.qLL}>LOWER LEFT</div>
            </div>
            <div className={css.right}>
                <div className={css.qUR}>UPPER RIGHT</div>
                <div className={css.qLR}>LOWER RIGHT</div>
            </div>

            {/* <div className={css.whole}>
                <div className={css.decorationTab}>
                    <div className={css.decorationTabLeft}>TAB LEFT</div>
                    <div className={css.decorationTabRight}>TAB RIGHT</div>
                </div>
                <div className={css.right}>
                    <div className={css.halfUQ}></div>
                </div>
                <div className={css.q75}></div>
            </div> */}

            {/* <div className={css.left}>
                <div className={css.halfUQ}></div>
                <div className={css.halfLQ}></div>
            </div>
            <div className={css.right}>
                <div className={css.halfUQ}>xxxxxxxxxx</div>
                <div className={css.halfLQ}></div>
            </div>
            <div className={css.q75}></div> */}
            
        </HelmetProvider>
    )
}

export default Others;