import carbonTexture from "./../../assets/images/carbon_fibre.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeDiv from "../../components/FadeDiv";
import { Link } from "react-router";

function getWindowDimensions() {
    const { innerWidth: w, innerHeight: h } = window;
    return { w, h };
}

const About = () => {
    const [screen, setScreen] = useState<{ h: number, w: number }>(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setScreen(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (

        <section
            className="w-screen h-full"
            style={{
                backgroundImage: `
                    url(${carbonTexture}),
                    linear-gradient(to bottom, #3289c6, #052136)
                    `,
                backgroundBlendMode: "multiply",
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
            }}
        >

            <svg
                id="image-section"
                className="absolute h-80 w-full"
                viewBox={`0 0 ${screen.w} 320`}
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <mask id="svgmask1" maskUnits="objectBoundingBox">
                        <motion.polygon
                            fill="white"
                            initial={{ points: `0,0 ${screen.w},0 ${screen.w},0 0,0` }}
                            animate={{ points: `0,0 ${screen.w},0 ${screen.w},320 0,200` }}
                            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                        />
                    </mask>
                </defs>
            </svg>

            <div
                className="relative h-80 w-full bg-lime-500"
                style={{
                    WebkitMask: "url(#svgmask1)",
                    mask: "url(#svgmask1)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskRepeat: "no-repeat",
                    maskSize: "cover",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <h1 className="absolute top-20 right-20">About Us</h1>
            </div>

            <div>
                <FadeDiv className="max-w-[600px] p-8" direction="right" delay={0.5}>

                    <h2>Why Choose Us?</h2>

                    <p>We understand you have a wide choice when choosing an accountancy firm for your business. Choosing to work with AML can bring numerous benefits to both individuals and businesses alike.</p>

                    <p>Our expert knowledge of complex accounting principals and financial regulations can help minimise errors and maximise your tax savings.</p>

                    <p>We can also provide valuable advice on financial planning, budgeting and investment strategies helping you to make more informed business decisions.</p>

                    <p>We work with businesses large and small, both in the local area and throughout the entire UK</p>

                    <p>Our services aside, we believe we offer a friendly, approachable service. We’re always available for any questions you may have and offer friendly, jargon free advice to all of our clients.</p>

                    <FadeDiv className="w-[60%] center" direction="right" delay={1}>
                        <Link className="z-10 center w-fit py-2 px-6 gap-x-3 rounded-full shadow-xl bg-lime-500" to="/about">
                            <h4>More about us</h4>
                            <i className='fa-solid fa-info-circle' />
                        </Link>
                    </FadeDiv>
                </FadeDiv>
            </div>

        </section>
    )
}

export default About;