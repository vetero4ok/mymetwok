import React from 'react';
import s from './Posts.module.css';

type PropsPostsType = {
    massage: string,
    likesCounts: number
}

export const Posts = (props: PropsPostsType) => {
    return (


        <div className={s.item}>
            <img   src="https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288"
            alt = {'ava'}/>
            <span> {props.massage}</span>
            <div>
                <span><button>Like</button></span>
                <span><button>{props.likesCounts}</button></span>
            </div>

        </div>

    );
}
