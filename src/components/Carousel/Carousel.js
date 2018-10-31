import React, { Component } from 'react';
import styles from './Carousel.module.css';
import CarouselItem from './CarouselItem/CarouselItem';
import image1 from './imagesCarousel/orange-wallpaper.png';
import image2 from './imagesCarousel/Imagen3.jpg';
import image3 from './imagesCarousel/ImagenEstudio3.jpg'

class Carousel extends Component {
    state = {
        items: [
            { img: image1, title: "Desarrollamos lo que necesites" },
            { img: image2, title: "Hacemos realidad tus ideas" },
            { img: image3, title: "Seras encontrado en los buscadores" }
        ],
        activeItem: 0,
        totalCounter: 1 //este counter sirve para hacer dos aniamciones diferentes dependiendo si es par o impar (cada vez que cambia un item hacemos counter++)
    }

    componentDidMount() {
        /*Este setTimeout es para que el primer item del carousel empiece con la animacion*/
        setTimeout(() => {
            this.setState({ activeItem: 1 });
        }, 1);

        /*Este set interval hace el bucle del carousel*/
        this.interval = setInterval(() => {
            let counter = this.state.activeItem;
            let totalCounter = this.state.totalCounter;

            let rect = document.body.getBoundingClientRect();
            console.log(rect.top, rect.right, rect.left, rect.bottom);

            if (counter === this.state.items.length) {
                counter = 1;
            } else {
                counter++;
            }
            this.setState({ activeItem: counter, totalCounter: totalCounter + 1 });

        }, 9000);


    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        let previous = this.state.activeItem === 1 ? this.state.items.length : this.state.activeItem - 1;

        let items = this.state.items
            .map((key, index) => {
                return (
                    <CarouselItem
                        key={index + 1}
                        id={index + 1}
                        image={this.state.items[index].img}
                        title={this.state.items[index].title}
                        active={this.state.activeItem === index + 1}
                        isPrevious={previous === index + 1}
                        actualEffect={(this.state.totalCounter % 2) + 1} >
                    </CarouselItem>
                )
            });



        return (
            <div className={styles.Carousel}>
                {items}
            </div>
        )
    }
}

export default Carousel;