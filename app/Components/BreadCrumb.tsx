"use client"
import Link from "next/link";

interface BreadCrumbProps{
    currentUrl : string;
}
function BreadCrumb(props:BreadCrumbProps){
    const {currentUrl} = props;
    const navItems = currentUrl.split("/");
    let navigate= "";
    return (
        <ul className="flex">
            {navItems.map((nav,index) => {
                navigate.concat("/"+nav);
                return (
                <li key={nav} className="text-black"><Link href={navigate}>{`${nav} ${index === navItems.length-1?"":"> "} `}</Link></li>  
            )})}
        </ul>
    )
}

export default BreadCrumb;