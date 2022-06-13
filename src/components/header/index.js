import { useState } from 'react'
import styles from './header.module.css'

const Header =()=>{
    return(
        <div className={`row flex center ${styles.header}`}>
            <h3>
                SHOP MANAGEMENT SYSTEM
            </h3>
        </div>
        )
    
}

export default Header