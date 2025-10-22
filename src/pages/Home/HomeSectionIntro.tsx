import { motion } from "framer-motion";
import { Link } from "react-router"
import FadeDiv from "../../components/FadeDiv"
import carbonTexture from "./../../assets/images/carbon_fibre.webp";

const HomeSectionIntro = () => {
    return (
        <section
            className="relative w-screen h-full flex items-center justify-start"
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

            <FadeDiv className="w-[60%] center" direction="right">
                <div className="center flex-col gap-6 max-w-[600px] p-8">

                    <h2 className="text-center">Helping our clients at every business stage</h2>

                    <h5 className="text-center">We are a team of skilled and experienced accountants who are dedicated to helping businesses and individuals manage their finances effectively. With our expertise and commitment to providing top-quality services, we have built a reputation as a trusted partner for our clients.</h5>

                    <FadeDiv className="w-[60%] center" direction="right" delay={0.5}>
                        <Link className="z-10 center w-fit py-2 px-6 gap-x-3 rounded-full shadow-xl bg-lime-500" to="/contact">
                            <h4>Get in touch</h4>
                            <i className='fa-solid fa-envelope' />
                        </Link>
                    </FadeDiv>

                </div>
            </FadeDiv>

            <svg
                id="image-section"
                className="absolute h-full w-full top-20 2xl:top-30 right-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <mask id="svgmask1" maskUnits="objectBoundingBox">
                        <motion.polygon
                            fill="white"
                            initial={{ points: "100,0 100,0 100,0" }}
                            animate={{ points: "40,0 100,0 100,100" }}
                            transition={{
                                duration: 1.5,
                                ease: [0.77, 0, 0.175, 1]
                            }}
                        />
                    </mask>
                </defs>

                <image
                    href="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#svgmask1)"
                />
            </svg>

        </section>
    )
}

export default HomeSectionIntro