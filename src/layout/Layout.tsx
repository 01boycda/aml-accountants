import Header from "./Header"
import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="flex flex-col h-[100vh]">

            <Header />

            <main className="relative w-full h-[94vh] top-[6vh]">
                {children}
            </main>

        </div>
    )
}

export default Layout