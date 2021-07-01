import preloader from '../../../assets/images/preloader.gif';
import React from 'react';

export const Preloader = () => {
    return(
        <>
            <img src={preloader} style={{width: '30px', height: '30px'}} alt={'loaders'}/>
        </>
    );
}