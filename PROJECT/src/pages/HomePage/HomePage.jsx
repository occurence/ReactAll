import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DecorationTab } from '../../components/DecorationTab/DecorationTab';
import css from './HomePage.module.css';
import { WelcomeTab } from '../../components/WelcomeTab/WelcomeTab';
import main from '../../images/main.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';

const HomePage = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>
            {/* <div className={css.container}>
                <img src={require("../../images/BgImageWrapper.png")} alt="BgImageWrapper.png" id={css.imageWrapper}/>
                <DecorationTab />
                <WelcomeTab />
            </div> */}







            <div className={main.left}>
                <img src={require("../../images/BgImageWrapper.png")} alt="BgImageWrapper.png" className={css.imageWrapper}/>
                    <div className={main.decor} style={{position:"absolute",top:"53%", left:"2%"}}>
                        <div className={main.decorationTabSolo}>
                            <div style={{potion:"absolute",display:"inline-flex",alignItems:"center",alignContent:"center",paddingLeft:"5%"}}>
                            <img src={require("../../images/ArrowUp.png")}/>
                            <div className={css.balanceLabel}><div className={css.balanceLabel}>Your balance</div>
                            <div className={css.balanceAmount}>$632.000</div></div>
                            <div className={css.raise}>+1.29%</div>
                            </div>
                        </div>
                        {/* <div className={css.bg}>
                            <img src={require("../../images/ArrowUp.png")} className={css.balanceState}/>
                            <div className={css.balanceLabel}>
                                <div className={css.balanceLabel}>Your balance</div>
                                <div className={css.balanceAmount}>$632.000</div>
                            </div>
                            <div className={css.raise}>+1.29%</div>
                        </div> */}
                    </div>
            </div>
            <div className={main.right} style={{display:"block"}}>
                <div className={main.qUR} style={{width:"95%",top:"3%"}}>
                    <p className={css.caption} style={{paddingTop:"20%"}}>EXPENSE LOG</p>
                    <p className={css.banner}>Manage Your <span className={css.underline}>Finances</span> Masterfully!</p>
                    <p className={css.caption}>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>
                </div>
                <div className={main.qLR} style={{width:"95%",top: "3%"}}>
                    <AuthNav />
                    <div className={css.allUsersTab}>
                        <p className={css.count}>1000 users +</p>
                        <p className={css.countCaption}>Trusted by users for reliable expense tracking!</p>
                    </div>
                    <div className={css.pfp}>
                        <img src={require("../../images/user3.png")} className={css.userPfp} id={css.p3}/>
                        <img src={require("../../images/user2.png")} className={css.userPfp} id={css.p2}/>
                        <img src={require("../../images/user1.png")} className={css.userPfp} id={css.p1}/>
                    </div>
                </div>
            </div>
















            
            {/* <div className={css.welcomeTab}>
            <div className={css.expenseBlock}>
                <p className={css.caption}>EXPENSE LOG</p>
                <p className={css.banner}>Manage Your <span className={css.underline}>Finances</span> Masterfully!</p>
                <p className={css.caption}>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>                
            </div>
            <div className={css.allUsersTab}>
                <p className={css.count}>1000 users +</p>
                <p className={css.countCaption}>Trusted by users for reliable expense tracking!</p>
            </div>
            <div className={css.pfp}>
                <img src={require("../../images/user3.png")} className={css.userPfp} id={css.p3}/>
                <img src={require("../../images/user2.png")} className={css.userPfp} id={css.p2}/>
                <img src={require("../../images/user1.png")} className={css.userPfp} id={css.p1}/>
            </div>
        </div> */}
        </HelmetProvider>
    )
}

export default HomePage;