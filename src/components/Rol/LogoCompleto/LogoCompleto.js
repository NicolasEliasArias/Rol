import React from 'react';
import styles from './LogoCompleto.module.css';
import logocompleto from '../img/SideLogo.png';

const LogoCompleto = () =>{
    return(
        <div className={styles.LogoCompleto}>
            <img src={logocompleto} alt='logo Rol'/>
        </div>
    )
}

export default LogoCompleto;