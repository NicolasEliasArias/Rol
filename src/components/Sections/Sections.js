import React from 'react';
import styles from './Sections.module.css';
import Section from './Section/Section';
import Inicio from './allSections/Inicio';

const Sections = (props) => {
    return (
        <div className={styles.Sections}>
            <Inicio/>
        </div>
    )


}

export default Sections;