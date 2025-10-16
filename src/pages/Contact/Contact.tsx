import carbonTexture from "./../../assets/images/carbon_fibre.webp";

const Contact = () => {
    return (
        <div className="relative w-screen h-full p-4"
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
            <h1>Contact</h1>
        </div>
    )
}

export default Contact;