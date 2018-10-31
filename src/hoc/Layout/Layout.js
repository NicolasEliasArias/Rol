import React, { Component } from 'react';
import styles from './Layout.module.css';
import SideNavBar from '../../components/Navigation/SideNavBar/SideNavBar';
import ButtonDrawer from '../../components/UI/ButtonDrawer/ButtonDrawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';


class Layout extends Component {
    state = {
        showMobileSideNavBar: false
    }

    itemClickedHandler = () => {
        //Hacemos el slide para los mobiles
        let slide = !this.state.showMobileSideNavBar;
        this.setState({ showMobileSideNavBar: slide });

        //scrolleamos hasta la posicion de Section
        this.props.scrollTo();
    }

    buttonDrawerHandler = () => {
        //Hacemos el slide para los mobiles
        let slide = !this.state.showMobileSideNavBar;
        this.setState({ showMobileSideNavBar: slide });
    }

    render() {
        return (
            <div className={styles.Layout}>
                <ButtonDrawer
                    flip={this.state.showMobileSideNavBar}
                    clicked={this.buttonDrawerHandler} />
                <Backdrop
                    show={this.state.showMobileSideNavBar}
                    clicked={this.itemClickedHandler} />
                <SideNavBar
                    show={this.state.showMobileSideNavBar}
                    itemClicked={this.itemClickedHandler} />
                <main className={styles.Main}>
                    {this.props.children}
                </main>
            </div>

        );
    }
}



export default Layout;