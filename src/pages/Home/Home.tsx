import { useEffect, useRef, useState } from "react";
import spikesTexture from "./../../assets/images/spikes.webp";

import PaginationUI from "./PaginationUI";
import HomeSectionIntro from "./HomeSectionIntro";
import HomeSectionAbout from "./HomeSectionAbout";
import HomeServicesSection from "./HomeSectionServices";

const Home = () => {
	const horizontalRef = useRef<HTMLDivElement | null>(null);
	const solidRhomRef = useRef<HTMLDivElement | null>(null);
	const transRhomRef = useRef<HTMLDivElement | null>(null);

	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		const hDiv = horizontalRef.current;
		const solDiv = solidRhomRef.current;
		const tranDiv = transRhomRef.current;

		if (!hDiv || !solDiv || !tranDiv) return;

		const numPanels = 3;
		let targetIndex = 0;
		let currentX = 0;
		let currentY = 0;
		let currentTransY = -150;
		let animFrame: number;

		const animate = () => {
			// Horizontal scroll
			const targetX = -targetIndex * 100;
			currentX += (targetX - currentX) * 0.1;
			hDiv.style.transform = `translateX(${currentX}vw)`;

			// Solid rhombus scroll
			const targetY = -targetIndex * 75;
			currentY += (targetY - currentY) * 0.1;
			solDiv.style.transform = `translateY(${currentY}vh)`;

			// Transparent rhombus scroll
			const targetTransY = -150 + targetIndex * 75;
			currentTransY += (targetTransY - currentTransY) * 0.1;
			tranDiv.style.transform = `translateY(${currentTransY}vh)`;

			setPage(targetIndex);

			animFrame = requestAnimationFrame(animate);
		};

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();
			if (e.deltaY > 0) targetIndex = Math.min(numPanels - 1, targetIndex + 1);
			else targetIndex = Math.max(0, targetIndex - 1);
		};

		animate();
		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => {
			cancelAnimationFrame(animFrame);
			window.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<div className="relative w-full h-full overflow-hidden">
			{/* Horizontal sections */}
			<div ref={horizontalRef} className="absolute w-fit h-full flex">

				<div className="w-screen h-full flex justify-end items-center">
					<HomeSectionIntro />
				</div>

				<div className="w-screen h-full flex justify-end items-center">
					<img
						src="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38"
						className="w-full h-full object-cover grayscale"
						alt="services-background-image"
					/>
				</div>

				<div className="w-screen h-full flex justify-end items-center">
					<HomeSectionAbout />
				</div>

			</div>

			{/* Transparent rhombus */}
			<div ref={solidRhomRef} className="absolute w-screen h-fit pointer-events-none">
				<div className="h-[245vh] flex items-center">
					<div className="w-screen h-screen flex items-center clip-rhombus bg-lime-400/50" />
				</div>
			</div>

			{/* Solid rhombus */}
			<div ref={transRhomRef} className="absolute w-screen h-fit pointer-events-none"
			>
				<div className="h-[245vh] flex items-center">
					<div
						className="w-screen h-screen flex items-center clip-rhombus-rev green-grad"
						style={{
							backgroundImage: `
								url(${spikesTexture}),
								linear-gradient(to bottom, #8ec743, #7aad37)
								`,
							backgroundBlendMode: "multiply",
							backgroundRepeat: "repeat, no-repeat",
							backgroundSize: "auto, cover",
						}}
					>
						<HomeServicesSection />
					</div>
				</div>
			</div>

			<PaginationUI page={page} />

		</div>
	);
};

export default Home;