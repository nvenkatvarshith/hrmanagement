"use client"
import Link from "next/link";
function Navbar(){
    const navItems = [
            { name: 'Dashboard', link: 'Dashboard' },
            { name: 'Requests', link: 'requests' },
            { name: 'Payroll', link: 'payroll' },
            { name: 'Company', link: 'company' },
            { name: 'Extras', link: 'extras' }
        ];
    
    return (
        <div className="flex justify-between items-center px-10 py-4">
            <Link href="/User/Dashboard"><img src="/kris-logo-dark.png" alt="logo" width="150px"/></Link>
            <div className="navitems">
                <ul className="flex gap-x-10">
                    {navItems.map((navItem) => (
                        <li className="font-bold" key={navItem.name}><Link href={`/User/${navItem.link}`}>{navItem.name}</Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <span className="rounded-full bg-navyblue text-white p-2 me-3"><i className="fa-solid fa-bell"></i></span>
                <span className="rounded-full bg-green-700 text-white p-2 me-3"><i className="fa-solid fa-envelope"></i></span>
                <Link href="/User/Dashboard/UpdateProfile"><span className="rounded-full bg-orange-300 text-white p-2"><i className="fa-solid fa-user"></i></span></Link>
            </div>
        </div>
    )
}

export default Navbar;