import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface FadeInSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
	once?: boolean;
}

const WipeDiv = ({ children, className, delay = 0, direction = "up", once = true }: FadeInSectionProps) => {

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 });

	useEffect(() => {
		if (inView) controls.start("visible");
	}, [controls, inView]);

	const offset = 40;

	// ✅ Explicitly type the variants object
	const variants: Variants = {
		hidden: {
			y: direction === "up" ? offset : direction === "down" ? -offset : 0,
			x: direction === "left" ? offset : direction === "right" ? -offset : 0
		},
		visible: {
			x: 0, y: 0,
			transition: { duration: 0.6, delay, ease: "easeOut" },
		},
	};

	return (
		<motion.div className={className} ref={ref} initial="hidden" animate={controls} variants={variants} >
			{children}
		</motion.div>
	);
}

export default WipeDiv