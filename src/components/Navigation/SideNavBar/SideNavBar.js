import React, { Component } from 'react';
import styles from './SideNavBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import LogoCompleto from '../../Rol/LogoCompleto/LogoCompleto';

class SideNavBar extends Component {

    /* Para hacer un efecto cuando scrolleo
state = {
    showParts: true
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}


handleScroll = () => {
    let rect = document.body.getBoundingClientRect();
    console.log(rect.top);
    if(rect.top <= -1000){
        if(this.state.showParts) 
            this.setState({showParts: false});
    }else{
        if(!this.state.showParts){
            this.setState({showParts: true})
        }
    }
}*/

    render() {


        let show = this.props.show ? styles.slide : null;

        /*Para hacer un efecto cuando scrolleo
                let showParts;
                let SideNavBarActive;
                if(this.state.showParts){
                     showParts =styles.PartActive ;
                     SideNavBarActive = styles.SideNavBarActive;
                }else{
                     showParts = styles.PartInactive;
                     SideNavBarActive = styles.SideNavBarInactive;
                }*/

        return (
            <header className={styles.SideNavBar + ' ' + show}>

            {/* <div className={styles.Part + ' ' + styles.LogoPart + ' ' + showParts} style={{animationDelay: "0.6s" , transitionDelay: "0.6s"}}>
                    <LogoCompleto />
                </div>

                <div className={styles.Part + ' ' + showParts} style={{animationDelay: "0.4s" , transitionDelay: "0.4s"}}>
                    <nav style={{ margin: "0" }}>
                        <NavigationItems
                            itemClicked={this.props.itemClicked} />
                    </nav>
                </div>
                <div className={styles.Part + ' ' + showParts} style={{animationDelay: "0.2s" , transitionDelay: "0.2s"}}></div>
                <div className={styles.Part + ' ' + showParts} style={{animationDelay: "0.0s" , transitionDelay: "0.0s"}}></div>*/}
                
                <LogoCompleto />
                <nav style={{ margin: "0" }}>
                    <NavigationItems
                        itemClicked={this.props.itemClicked} />
                </nav>
            </header>
        )
    }

}

export default SideNavBar;