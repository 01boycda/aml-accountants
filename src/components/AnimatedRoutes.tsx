import { Route, Routes, useLocation } from "react-router"

// Pages
import Home from './../pages/Home/Home'
import About from './../pages/About/About'
import Services from './../pages/Services/Services'
import Contact from './../pages/Contact/Contact'
import { AnimatePresence, motion } from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-full w-full"
    >
        {children}
    </motion.div>
)