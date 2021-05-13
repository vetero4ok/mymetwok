import React from 'react';
import s from "./Header.module.css";


export const Header  = () => {
    return (
        <header className={s.header}>
          <img src="http://htmlbook.ru/files/images/layout2/6-05.png" alt="welcome"/>
        </header>
    );
}
