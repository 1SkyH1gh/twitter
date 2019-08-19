import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './NewsBlockStyles.module.scss'
export interface NewsProps {

}

export const News:FunctionComponent<NewsProps>=()=>{
    return(
        <div className={styles.newsCont}>
            <div className={styles.news}><p>news info</p></div>
            <div className={styles.twitch}>
                    Video
            </div>
            <div className={styles.twitchSide}>Side</div>
        </div>
    )
}