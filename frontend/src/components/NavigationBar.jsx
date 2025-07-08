import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';
import "./../css/index.css";

export default function NavigationBar() {

    const [links, setLinks] = useState([
        { label: "Home" ,url:"/Home" },
        { label: "Categories",url:"/Home" },
        { label: "Forum" ,url:"/Home"},
        { label: "About",url:"/Home" },
        { label: "Donation" ,url:"/Home"}
    ]);

    return (

        <>
            <TabMenu model={links}/>
    
            <div className="navigation-bar-container">
                {links.map((item) =>
                    <Link 
                        to="/home">{item.label}
                    </Link>
                )}
            </div>
        </>

    )




}