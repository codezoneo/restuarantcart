import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImg from "../../assets/food img.jpg"
import classes from './Header.module.css';




const Header = props=>{
return (<>
<header className={classes.header}>
    <h1>FoodVilla!</h1>
    <HeaderCartButton onclick={props.onShowCart}/>

</header>
<div className={classes['main-image']}>
    <img src={mealsImg} alt='delicious food !'/>
</div>
</>
)
}
export default Header;