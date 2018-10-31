import React, { Fragment } from 'react';
import styles from './Inicio.module.css';
import Tilt from 'react-tilt';

const Inicio = (props) => {
    return (
        <Fragment>
            <div className={styles.Presentation}>
                <h1>TITULO DEL INICIO</h1>
            </div>

            <div className={styles.Inicio}>
                <Tilt options={{ reverse: true, max: 11 }}>
                    <div className={"Tilt-inner"}>
                        <div className={styles.Item}></div>
                    </div>
                </Tilt>
            </div>
        </Fragment >
    )
}

export default Inicio;