import React from 'react';
import styles from './Arrow.module.css';
import leftArr from './img/leftArrows.png';
import middleArr from './img/middleArrow.png';
import rightArr from './img/rightArrow.png';
const Arrow = (props) => {


    let arrowLeft = null;
    let arrowMiddle = null;
    let arrowRight = null;
    if(props.active){
        arrowLeft = styles.LeftArrowsActive;
        arrowMiddle = styles.MiddleArrowActive;
        arrowRight = styles.RightArrowActive;
    }
    return (
        <div className={styles.Arrow}>
            <div className={styles.LeftArrows + ' ' + arrowLeft}>
                <img src={leftArr} alt="left arrow" />
            </div>

            <div className={styles.MiddleArrow + ' ' + arrowMiddle}>
                <img src={middleArr} alt="middle arrow" />
            </div>

            <div className={styles.RightArrow + ' ' + arrowRight}>
                <img src={rightArr} alt="right arrow" />
            </div>
        </div>
    )
}

export default Arrow;