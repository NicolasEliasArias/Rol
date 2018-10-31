import React from 'react';
import styles from './CarouselItem.module.css';

const CarouselItem = (props) => {

    let activeItem = null;
    let activeImg = null;

    //si el item es el active
    if (props.active) {
        //Si elefecto actual es el 1
        if (props.actualEffect === 1) {
            activeItem = styles.Item_active_1;
            activeImg = styles.Img_active_1;
        } else {
            //si el efecto actual es el 2
            if (props.actualEffect === 2) {
                activeItem = styles.Item_active_2;
                activeImg = styles.Img_active_2;
            }
        }
    } else {//si no es el item activo
        activeItem = styles.Item_inactive
        activeImg = styles.Img_inactive;
    }


    //Creacion del titulo 
    let title = null;
    let characters = [];
    for (let i = 0; i < props.title.length; i++) {
        characters.push(props.title.charAt(i));
    }

    //asignacion de className
    let show = null;
    if(props.active){
        show = styles.LetterActive;
    }else{
        if(props.isPrevious){
            show = styles.LetterPrev;
        }else{
            show = styles.LetterInactive;
        }
    }

    /*Animacion del titulo del carrusel */
    /* j es el gap (intervalo de tiempo) entre la animacion de cada letra */
    let sum = 0.09;
    let j = 0.009;

    let palabra = [];
    // foundWhiteSpace: va a ir chequeando si encontramos (antes de ingresar una letra nueva) si encontramos un espacio
    let foundWhiteSpace = false;
    title = characters.map( (char, index) => {
        //Si encontramos un espacio armamos un div para la palabra entera...
        if(char === " "){
            foundWhiteSpace = true;
            return (
                //retornamos la oracion y la guardamos en "title"
                <div key={index} className={styles.Word}>
                    {palabra}
                </div>
            )
        }else{
            if(foundWhiteSpace){//si antes encontramos un espacio en blanco...
                palabra=[];
                foundWhiteSpace = false;
            }
            sum = sum + j;
            //guardamos la letra en el array "palabra"
            palabra.push(
                <div key={index} className={styles.Letter + ' ' + show} style={{transitionDelay: sum+"s"}}>
                    {char}
                </div>
            ) 
            //Si estamos parados en la ultima letra del titulo, agregamos la palabra a "title"
            if( index + 1 === characters.length ){
                return (
                    <div key={index} className={styles.Word}>
                        {palabra}
                    </div>
                )
            }else{
                return null;
            }  
        }

    });



    return (
        <div className={styles.CarouselItem + ' ' + activeItem}>
            <h1>{title}</h1>
            <div className={styles.CarouselImg + ' ' + activeImg} style={{ backgroundImage: `url(${props.image})` }}>
            </div>

        </div>
    )

}

export default CarouselItem;