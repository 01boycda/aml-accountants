import { Link, NavLink } from 'react-router'
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
        <header className="z-10 fixed center top-0 w-full h-16 dark-blue-bg">
            <div className="flex items-center justify-between w-full max-w-7xl m-auto">

                <nav className="hidden md:flex items-center gap-x-8 px-4">
                    <Link to="/">
                        <img src={logo} className='m-2 aspect-auto h-[5vh]' />
                    </Link>

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


                <div className='flex gap-4 px-4'>
                    <div className="center py-2 px-4 gap-4 border border-amber-500 rounded-full">
                        <i className="fa-solid fa-phone text-amber-500" />
                        <h4 className="text-lime-500">01132 250 067</h4>
                    </div>

                    <Link to="/contact" className="center py-2 px-4 gap-4 border border-amber-500 rounded-full">
                        <i className='fa-solid fa-envelope text-amber-500' />
                        <h4 className="text-lime-500">Book a Call</h4>
                    </Link>
                </div>


            </div>
        </header>
    )

}

export default Header