import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './HeaderStyles.module.scss'
export interface HeaderProps {

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div className={styles.containerHeader}>
            <div className={styles.linksCont}>
                <p className={styles.links}>News</p>
                <p className={styles.links}>Music</p>
                <p className={styles.links}>Videos</p>
            </div>
            <div className={styles.logoBlock}>
                <h1 className={styles.logo}>TTL</h1>
            </div>
            <div className={styles.avatarBlock}>LOGO</div>
        </div>
    )
}