import React from "react";
import styles from '../styles/Homepage.module.css'

export class HomePageController extends React.Component {
    render() {
        const menu = JSON.parse(`{
            "heading": "Dashboard",
            "interface": [
                "Components",
                "Utilities"
            ],
            "ADDONS": [
                "Pages",
                "Charts",
                "Tables"
            ]
        }`);
        let interfaceElem = []
        console.log(menu["interface"])
        for(let i=0; i<menu["interface"].length; i++) {
            interfaceElem.push(
                <div>
                    <div><h4>{menu["interface"][i]}</h4></div>
                </div>
            )
        }
        let addOnsElem = []
        console.log(menu["ADDONS"])
        for(let i=0; i<menu["ADDONS"].length; i++) {
            addOnsElem.push(
                <div>
                    <div><h4>{menu["ADDONS"][i]}</h4></div>
                </div>
            )
        }
        const details = JSON.parse(`{
            "EARNINGS (MONTHLY)": "$40,000",
            "EARNINGS (ANNUAL)": "$215,000",
            "TASKS": "50%", 
            "PENDING REQUESTS": "18" 
        }`);
        let detailsElem = []
        for(const key in details) {
            detailsElem.push(
                <div className={styles.info} key={key}>
                    <h6>{key}</h6>
                    <div>{details[key]}</div>
                </div>        
            )
        }
        return(
            <div className={styles.container}>
                <div className={styles.menus}>
                    <div className={styles.menu}>
                        <div>{menu["heading"]}</div>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuHeader}>INTERFACE</div>
                        <div>
                            {interfaceElem}
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.menuHeader}>ADDONS</div>
                        <div>
                            {addOnsElem}
                        </div>
                    </div>
                </div>
                <div className={styles.infos}>
                    {detailsElem}
                </div>
            </div>
        )
    }
}