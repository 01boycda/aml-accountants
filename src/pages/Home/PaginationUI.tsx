const PaginationUI = ({ page }: { page: number }) => {
	return (
		<div className="absolute w-[14vw] h-2 flex justify-between items-center bottom-6 left-1/2 transform -translate-x-1/2 rounded-full">

			<div className="center h-4 w-4">
				<div className={`${page === 0 ? "h-4 w-4" : "h-2 w-2"} center rounded-full bg-blue-800 transition-all duration-300`}>
					<div className={`${page === 0 ? "bg-white " : "transparent"} h-1/2 w-1/2 rounded-full transition-all duration-300`} />
				</div>
			</div>

			<div className="center h-4 w-4">
				<div className={`${page === 1 ? "h-4 w-4" : "h-2 w-2"} center rounded-full bg-blue-800 transition-all duration-300`}>
					<div className={`${page === 1 ? "bg-white " : "transparent"} h-1/2 w-1/2 rounded-full transition-all duration-300`} />
				</div>
			</div>

			<div className="center h-4 w-4">
				<div className={`${page === 2 ? "h-4 w-4" : "h-2 w-2"} center rounded-full bg-blue-800 transition-all duration-300`}>
					<div className={`${page === 2 ? "bg-white " : "transparent"} h-1/2 w-1/2 rounded-full transition-all duration-300`} />
				</div>
			</div>
		</div>
	)
}

export default PaginationUI