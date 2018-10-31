import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={styles.Footer}>
            <div style={{width: "20%"}}>
                parteizquierda
            </div>
            <div style={{width: "60%"}}>
                parte central
            </div>
            <div style={{width: "20%"}}>
                partederecha
            </div>
        </div>
    )
}

export default Footer;
