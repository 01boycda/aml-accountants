import { Link } from "react-router"
import FadeDiv from "../../components/FadeDiv"
import carbonTexture from "./../../assets/images/carbon_fibre.webp";

const HomeSectionAbout = () => {
    return (
        <section
            className="relative w-screen h-full flex items-center justify-end"
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
            <FadeDiv className="w-[60%] center" direction="left" delay={0.5}>
                <div className="center flex-col gap-6 max-w-[600px] p-8">

                    <h2 className=" text-center">Tailored Service</h2>

                    <h5 className=" text-center">At AML, we understand that every client is unique, and we tailor our approach to meet their specific needs. Whether you are a small business owner, an individual taxpayer, or a large corporation, we have the knowledge and resources to help you achieve your financial goals.</h5>

                    <FadeDiv className="w-[60%] center" direction="left" delay={1}>
                        <Link className="z-10 center w-fit py-2 px-6 gap-x-3 rounded-full shadow-xl bg-lime-500" to="/contact">
                            <h4>More about us</h4>
                            <i className='fa-solid fa-info-circle' />
                        </Link>
                    </FadeDiv>

                </div>
            </FadeDiv>

            <svg
                id="image-section"
                className="absolute h-full w-full top-0 left-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <mask id="svgmask2" maskUnits="objectBoundingBox">
                        <polygon fill="white" points="0,0 10,0 50,100 0,100" />
                    </mask>
                </defs>

                <image
                    href="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#svgmask2)"
                />
            </svg>
        </section>
    )
}

export default HomeSectionAbout