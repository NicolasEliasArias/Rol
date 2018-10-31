import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
import Arrow from '../../../Rol/Arrow/Arrow';

class NavItem extends Component {
    state = {
        opacity: 1
    }

    /*Metodos cuando se entra al item (cualquiera) de la barra de navegacion*/
    mouseEnterHandler = () => {
        this.setState({ opacity: 1 });
    }
    mouseLeaveHandler = () => {
        if (!this.props.active && this.props.mouseEnteredList) {
            this.setState({ opacity: 0.6 });
        }
    }

    render() {

        let itemStyle = styles.NavItemInactive;

        /*Aca se setean los className de los items de la barra de navegacion*/
        if (this.props.active) {
            itemStyle = styles.NavItemActive;
        }
        let entered =styles.enteredItemActive;
        if (this.props.mouseEnteredList) {
            if (this.props.active) {
                entered = styles.enteredItemActive
            } else {
                entered = styles.enteredItemInactive
            }
        } else {
            
        }

        return (
            <div
                onMouseEnter={this.mouseEnterHandler}
                onMouseLeave={this.mouseLeaveHandler}
            >
                <li className={styles.NavItem + ' ' + itemStyle+ ' '+ entered}>
                    <Arrow
                        active={this.props.active}/>
                    <NavLink
                        onClick={this.props.click}
                        to={this.props.to}
                        exact>
                        {this.props.children}
                    </NavLink>
                </li>
            </div>

        )
    }
}

export default NavItem;