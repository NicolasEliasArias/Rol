import React, {Fragment} from 'react';
import styles from './Menu.module.css';

const Menu = (props) => {
    let changeTop = props.change ? styles.MenuTop : null;
    let changeMiddle = props.change ? styles.MenuMiddle : null;
    let changeBottom = props.change ? styles.MenuBottom : null;
    return (
        <Fragment>
            <div className={styles.Menu+ ' '+ changeTop}></div>
            <div className={styles.Menu+ ' '+ changeMiddle}></div>
            <div className={styles.Menu+ ' '+ changeBottom}></div>
        </Fragment>
    )
}

export default Menu;