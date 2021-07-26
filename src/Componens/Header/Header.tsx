import React from 'react';
import s from './Header.module.css';
import ava from '../../assets/images/myDefaultAva.jpg'
import {NavLink} from 'react-router-dom';
import {UserProfileType} from '../../Redux/profilePageReducer';
import {Preloader} from '../Common/Preloader/Preloader';
import logo_header from '../../assets/logos/logo_header.png'

type ProsHeaderType = {
    isAuth: boolean
    login: string
    profile: UserProfileType | null
}

export const Header = (props: ProsHeaderType) => {
    if (!props.profile && props.profile === null) {
        return <Preloader/>
    }
    return (
        <header className={s.header}>
            <img src={logo_header} alt={'app logo'}/>
            <div className={s.mainTitle}>
                My social network
            </div>

            {props.isAuth
                ?
                <div className={s.loginBlock}>
                    <div>{props.login}</div>

                    <img src={props.profile?.photos.small !== null
                        ? props.profile?.photos.small
                        : ava}
                         alt={'user avatar'}
                    />
                </div>
                :
                <NavLink to={'/login'}>
                    <button>Login</button>
                </NavLink>}


        </header>
    );
}
