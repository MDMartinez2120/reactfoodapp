import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../Assets/meals.jpeg'
import classes from "./Header.module.css";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>OrderUp!</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='table with food on it'/>
        </div>
    </Fragment>
}
export default Header;