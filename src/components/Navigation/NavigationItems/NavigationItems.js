import React, { Component } from 'react';
import * as routes from '../../../const/rutes';
import styles from './NavigationItems.module.css';
import NavItem from './NavItem/NavItem';
import { withRouter } from 'react-router-dom';

class NavigationItems extends Component {
    /* los items se crean en el state y en componentWillMount se chequea si la direccion es correcta */
    state = {
        activeItem: 1,
        items: {
            item1: {
                dir: routes.INICIO,
                title: 'Inicio'
            },
            item2: {
                dir: routes.VISIONMISIONVALORES,
                title: 'Vision Mision Valores'
            },
            item3: {
                dir: routes.SERVICIOSPROFESIONALES,
                title: 'Servicios Profesionales'
            },
            item4: {
                dir: routes.CONTACTO,
                title: 'Contacto'
            }
        },
        mouseEnteredOnList: false
    }

    componentWillMount(){
        switch (this.props.location.pathname){
            case routes.INICIO:
                this.setState({activeItem: 1})
                break;
            case routes.VISIONMISIONVALORES:
                this.setState({activeItem: 2})
                break;
            case routes.SERVICIOSPROFESIONALES:
                this.setState({activeItem: 3})
                break;
            case routes.CONTACTO:
                this.setState({activeItem: 4})
                break;
            default: this.setState({activeItem: 1})
        }
    }

    activeItemHandler = (itemId) => {
        this.setState({ activeItem: itemId });
        this.props.itemClicked();
    }

    render() {
        let itemsNav = Object.keys(this.state.items).map((item, index) => {
            return (
                <NavItem
                    key={index}
                    id={index + 1}
                    to={this.state.items[item].dir}
                    active={this.state.activeItem === index + 1}
                    mouseEnteredList={this.state.mouseEnteredOnList}
                    click={() => this.activeItemHandler(index + 1)} >{this.state.items[item].title}</NavItem>
            )
        })
        return (
            <ul
                onMouseOver={() => this.setState({ mouseEnteredOnList: true })}
                onMouseOut={() => this.setState({ mouseEnteredOnList: false })}
                className={styles.NavigationItems} >
                {itemsNav}
            </ul>
        )
    }
}

export default withRouter(NavigationItems);