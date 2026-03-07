import Link from "next/link";

interface BreadCrumbProps{
    currentUrl : string;
}
function BreadCrumb(props:BreadCrumbProps){
    const {currentUrl} = props;
    const navItems = currentUrl.split("/");
    return (
        <ul className="flex">
            {navItems.map((nav,index) => (
                <li key={nav} className="text-black"><Link href={`${nav}`}>{`${nav} ${index === navItems.length-1?"":"> "} `}</Link></li>  
            ))}
        </ul>
    )
}

export default BreadCrumb;