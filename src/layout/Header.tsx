import { NavLink } from 'react-router'
import logo from './../assets/images/aml_logo.png'
import { motion } from 'framer-motion'

const Header = () => {

    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/services", label: "Services" },
        { to: "/contact", label: "Contact Us" },
    ]

    return (
        <header>
            <div className="flex items-center justify-between w-full max-w-7xl">

                <nav className="hidden md:flex items-center gap-x-8">
                    <img src={logo} className='m-2 aspect-auto h-[5vh]' />
                    {links.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className="relative nav-link"
                        >
                            {({ isActive }) => (
                                <>
                                    <span>{link.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 h-[2px] bg-[#8ec743]"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>


                <div className="center py-2 px-4 gap-4 border border-amber-500 rounded-full">
                    <i className="fa-solid fa-phone text-amber-500" />
                    <h4 className="text-lime-500">01132 250 067</h4>
                </div>

            </div>
        </header>
    )

}

export default Header