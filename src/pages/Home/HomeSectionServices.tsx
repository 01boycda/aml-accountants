import { Link } from "react-router"
import FadeDiv from "../../components/FadeDiv"
import carbonTexture from "./../../assets/images/carbon_fibre.webp";

const HomeServicesSection = () => {
	return (
		<div className="center w-screen h-[50vh] p-4  pointer-events-auto shadow-2xl"
			style={{
				backgroundImage: `
                    url(${carbonTexture}),
                    linear-gradient(to bottom, #3289c6, #052136)
                    `,
				backgroundBlendMode: "multiply",
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
			}}>

			<div className="center flex-col w-full h-full p-4 border-2 border-amber-500">

				<div className="h-1/6 center">
					<h2>Our Services</h2>
				</div>


				<div className="flex flex-col h-5/6 w-screen max-w-6xl p-4 gap-y-4">

					<div className="bg-amber-500 h-0.5 w-full rounded-full" />

					<div className="flex-1 flex w-full gap-4">

						<FadeDiv className="center flex-col w-full h-full trans-grad" delay={0.2}>

							<h4 className="text-center whitespace-pre-wrap">{"Accounting\n& Tax"}</h4>

							<div className="center h-1/2">
								<i className={"fa-solid fa-calculator text-amber-500"} style={{ fontSize: "8vh" }} />
							</div>

							<Link className="w-fit m-2 px-4 py-2 rounded-full shadow-xl bg-lime-500" to="/contact">
								Find out more
							</Link>

						</FadeDiv>

						<FadeDiv className="center flex-col w-full h-full trans-grad" delay={0.4}>

							<h4 className="text-center whitespace-pre-wrap">{"Business Tax\nPlanning"}</h4>

							<div className="center h-1/2">
								<i className={"fa-solid fa-chart-line text-amber-500"} style={{ fontSize: "8vh" }} />
							</div>

							<Link className="w-fit m-2 px-4 py-2 rounded-full shadow-xl bg-lime-500" to="/contact">
								Find out more
							</Link>

						</FadeDiv>

						<FadeDiv className="center flex-col w-full h-full trans-grad" delay={0.6}>
							<h4 className="text-center whitespace-pre-wrap">{"Business\nDevelopment"}</h4>

							<div className="center h-1/2">
								<i className={"fa-solid fa-gear text-amber-500"} style={{ fontSize: "8vh" }} />
							</div>

							<Link className="w-fit m-2 px-4 py-2 rounded-full shadow-xl bg-lime-500" to="/contact">
								Find out more
							</Link>

						</FadeDiv>


						<FadeDiv className="center flex-col w-full h-full trans-grad" delay={0.8}>

							<h4 className="text-center whitespace-pre-wrap">{"Outsourced\nServices"}</h4>

							<div className="center h-1/2">
								<i className={"fa-solid fa-hexagon-nodes text-amber-500"} style={{ fontSize: "8vh" }} />
							</div>

							<Link className="w-fit m-2 px-4 py-2 rounded-full shadow-xl bg-lime-500" to="/contact">
								Find out more
							</Link>

						</FadeDiv>
					</div>
				</div>
			</div>


		</div >
	)
}

export default HomeServicesSection