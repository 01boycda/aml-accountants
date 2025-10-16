import type { ReactNode } from "react"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
    return (
        <button className="rounded-full py-2 px-4 shadow-xl" {...props}>
            {children}
        </button>
    )
}

export default CustomButton