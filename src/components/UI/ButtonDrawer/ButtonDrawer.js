import React from 'react';
import styles from './ButtonDrawer.module.css';
import Menu from './Menu/Menu';

const ButtonDrawer = (props) =>{

    let flip = props.flip ? styles.flipped : null;
    return(
        <div className={styles.ButtonDrawer+ ' ' + flip} onClick={props.clicked}>
            <Menu
                change={props.flip}/>
        </div>
    )
}

export default ButtonDrawer;