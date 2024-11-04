import { Fragment } from "react";
import BackgroundImg from '../../assets/BackgroundImg.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={BackgroundImg} alt="table full of food item"/>
      </div>
    </Fragment>
  );
};

export default Header;
