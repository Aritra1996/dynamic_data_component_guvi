import React from "react";
import styles from '../styles/Homepage.module.css'

export class HomePageController extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.menus}>
                    <div className={styles.card}>Dashboard</div>
                    <div className={styles.card}>
                        <div>Header</div>
                        <div>
                            <div>Components</div>
                            <div>Utilites</div>
                        </div>
                    </div>
                    <div className={styles.card}>6</div>
                </div>
                <div className={styles.infos}>
                    <div>6</div>
                    <div>6</div>
                    <div>6</div>
                    <div>6</div>
                    <div>6</div>
                </div>
            </div>
        )
    }
}